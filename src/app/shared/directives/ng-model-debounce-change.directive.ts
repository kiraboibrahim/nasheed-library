import { Directive, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';


@Directive({
  selector: '[ngModelDebounceChange]',
})
export class NgModelDebounceChangeDirective implements OnDestroy, OnInit {
  /** Emit event when model has changed. */
  @Output() ng_model_debounce_change = new EventEmitter<any>();

  /** Subscriptions for cleanup. */
  private subscription: Subscription;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private ng_model: NgModel) {}

  ngOnInit(): void {
    this.subscription = this.ng_model.control.valueChanges
      .pipe(skip(1), debounceTime(400), distinctUntilChanged())
      .subscribe(value => this.ng_model_debounce_change.emit(value));
  }
}
