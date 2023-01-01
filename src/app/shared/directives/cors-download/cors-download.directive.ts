import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, HostBinding, Input, HostListener } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { of, catchError, map, Subscription } from 'rxjs';


@Directive({
  selector: 'a[download]',
  exportAs: 'corsDownload'
})
export class CorsDownloadDirective {
  private same_origin_regex: RegExp = new RegExp(`^data:|^blob:|^http(?:s)?:\/\/${window.location.host}`);
  /** True if something went wrong attempting to download the resource */
  public error: boolean = false;

  /** True when the request is in process */
  public busy: boolean = false;

  private sub: Subscription;
  private blob: string | null;
  private href: string;
  constructor(private http: HttpClient, private ref: ElementRef<HTMLAnchorElement>, private sanitizer: DomSanitizer) { }

  @HostBinding('attr.download') @Input() download: string;

  // Intercepts the href
  @Input('href') set source(href: string) {

    // Revokes the previous URL object, if any
    if(this.blob) { URL.revokeObjectURL(this.blob); this.blob = null; }

    // Resets possible errors
    this.error = false;

    // Updates the href
    this.href = href;
  }

  // Sanitizes the href to accept both urls and blobs
  @HostBinding('href') get safeHref(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.href);
  }

  // Listens to the click events
  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation();
    // Do nothing on empty href
    if(!this.href || this.busy) { return false; }

    // Proceed with the download on files from the same origin
    if(this.error || this.same_origin_regex.test(this.href)) { return true; }

    // Unsubscribes previous subscription, if any
    if(this.sub) { this.sub.unsubscribe(); }

    // Starts processing
    this.busy = true;

    // Gets the source file as a blob
    this.sub = this.http.get(this.href, { responseType: "blob" }).pipe(

      // Creates the URL object ready for download
      map( blob => this.blob = URL.createObjectURL(blob) ),

      // Catches possible errors such as CORS not allowing the file download
      catchError( error => {
        // Tracks the error for the next round to complete anyhow
        this.error = true;

        // Reverts to the original href for the browser to open the file instead of downloading it
        return of(this.href);
      })

    ).subscribe( url => {

      // Updates the href with the blob url on success
      this.href = url;

      // Ends processing
      this.busy = false;

      // Triggers another click event making sure the [href] gets updated first
      setTimeout( () => this.ref.nativeElement.click() );
    });

    // Prevents default
    return false;
  }

  ngOnDestroy() {

    // Revokes the URL object
    if(this.blob) { URL.revokeObjectURL(this.blob); }

    // Unsubscribes the encoder
    if(this.sub) { this.sub.unsubscribe(); }
  }
}
