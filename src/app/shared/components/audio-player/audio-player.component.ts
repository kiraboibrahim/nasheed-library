import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';

import { AudioPlayerBaseComponent } from '../audio-player-base/audio-player-base.component';
import { Track } from 'src/app/data/types/track.model';
import { Artist } from 'src/app/data/types/artist.model';


@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent extends AudioPlayerBaseComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() backgroundColor: string = "rgb(33, 33, 33)";
  @Input() audioTimeColor: string = "rgb(144, 144, 144)";
  @Input() audioTitleColor: string = "rgb(144, 144, 144)";
  @Input() volumeSliderColor: string = "rgb(144, 144, 144)";
  @Input() timeSliderColor: string = "rgb(144, 144, 144)";
  @Input() audioList: Track[] = [];
  @Input() next: boolean = true;
  @Input() previous: boolean = true;
  @Input() shuffle: boolean = true;
  @Input() repeat: boolean = true;
  @Input() scrollTitle: boolean = true;
  @Input() playButtonColor: string = "rgb(144, 144, 144)";
  @Input() pauseButtonColor: string = "rgb(144, 144, 144)";
  @Input() nextButtonColor: string = "rgb(144, 144, 144)";
  @Input() previousButtonColor: string = "rgb(144, 144, 144)";
  @Input() repeatButtonColor: string = "rgb(144, 144, 144)";
  @Input() activeRepeatButtonColor: string = "rgb(144, 144, 144)";
  @Input() volumeButtonColor: string = "rgb(144, 144, 144)";
  @Input() muteButtonColor: string = "rgb(144, 144, 144)";
  @Output() nextEvent = new EventEmitter();
  @Output() previousEvent = new EventEmitter();
  @Output() repeatEvent = new EventEmitter();
  @Output() shuffleEvent = new EventEmitter();
  @Output() seekEvent = new EventEmitter();

  selectedAudio: Track;
  currentAudioIndex: number = 0;
  repeatActive: boolean = false;
  isError: boolean = false;
  isShuffle: boolean = false;
  volumeBeforeMute: number;

  constructor() {
    super();
  }

  ngOnInit() {
    this.setAudioEventListeners();
    this.initiateAudioPlayer();

    //check audio is ended for next song
    this.audioEnded.subscribe((data: boolean) => {
      if (!this.isRepeat && this.audioList.length > 0) {
        this.nextAudio();
      }
    })
  }

  nextAudio() {
    if(!this.isLastAudioPlaying()) {
      this.currentAudioIndex++;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.setAudioLength();
      if(this.isAudioPlaying) {
        this.play();
      }
      this.nextEvent.emit();
    } else {
      this.pause();
    }
  }

  isLastAudioPlaying(): boolean {
    return  this.currentAudioIndex == this.audioList.length - 1;
  }

  previousAudio() {
    if(this.currentAudioIndex != 0) {
      this.currentAudioIndex -= 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.setAudioLength();
      if(this.isAudioPlaying) {
        this.play();
      }
      this.previousEvent.emit();
    }
  }

  seekAudio(event: any) {
    if(this.audioVolume != 0) {
      this.isMute = false;
    }
    this.audioPlayer.nativeElement.currentTime = event.target.value;
    this.seekEvent.emit();
  }

  repeatAudio() {
    this.isRepeat = !this.isRepeat;
    this.repeatActive = !this.repeatActive;
    this.audioPlayer.nativeElement.loop = this.isRepeat;
    this.repeatEvent.emit();
  }

  volumeChange(event: any) {
    this.audioPlayer.nativeElement.volume = event.target.value / 100;
  }

  muteAudio() {
    if (this.isMute) {
      this.audioPlayer.nativeElement.volume = 0.5;
      this.isMute = false;
    } else {
      this.audioPlayer.nativeElement.volume = 0;
      this.isMute = true;
    }
  }

  initiateAudioPlayer() {
    if (this.audioList.length <= 0) {
      this.isError = true;
    } else {
      this.selectedAudio = this.audioList[this.currentAudioIndex];
    }
  }

  playTrack(track: Track) {
    this.selectedAudio = track;
    this.play();
  }
}
