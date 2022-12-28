import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: "audio-player-base",
  template: ""
})
export class AudioPlayerBaseComponent {
  totalAudioLength: number;
  currentAudioTime: number = 0;
  isAudioLoaded: boolean = false;
  isAudioPlaying: boolean;
  isRepeat: boolean = false;
  audioVolume: number = 100;
  audioEnded: Subject<boolean> = new Subject();
  isMute: boolean = false;
  @Output() playEvent = new EventEmitter();
  @Output() pauseEvent = new EventEmitter();

  //Access audio player dom
  @ViewChild('audioPlayer', {static: true}) audioPlayer: ElementRef;

  //get audio player events
  setAudioEventListeners(): void {
    //emit event when playing audio
    this.audioPlayer.nativeElement.addEventListener('playing', () => {
    });

    //emit when intial loading of audio
    this.audioPlayer.nativeElement.addEventListener('loadeddata', () => {
      this.isAudioLoaded = true;
      this.setAudioLength();
    });

    //emit time on playing audio
    this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
      //get current audio time
      this.currentAudioTime = Math.floor(this.audioPlayer.nativeElement.currentTime);
      //check if audio is ended for next song and pass data to component
      if (this.audioPlayer.nativeElement.ended) {
        this.audioEnded.next(true);
      }
    });

    this.audioPlayer.nativeElement.addEventListener('volumechange', () => {
      this.audioVolume = Math.floor(this.audioPlayer.nativeElement.volume * 100);
      if (this.audioVolume == 0) {
        this.isMute = true;
      } else {
        this.isMute = false;
      }
    })
  }


  play() {
    //toggle play-pause button
    this.isAudioPlaying = true;
    //play when user click play button
    setTimeout(() => {
      this.audioPlayer.nativeElement.play();
      this.playEvent.emit();
     }, 0);
  }

  pause() {
    //toggle play-pause button
    this.isAudioPlaying = false;
    //pause when user click pause button
    setTimeout(() => {
      this.audioPlayer.nativeElement.pause();
      this.pauseEvent.emit();
     }, 0);
  }

  setAudioLength() {
    this.totalAudioLength = Math.floor(this.audioPlayer.nativeElement.duration);
  }

  constructor() {}
}
