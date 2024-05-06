import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//components

//progress

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule],
})
export class AppComponent {
  minutes: number = 0;
  seconds = '00';
  timer: any;
  started = false;
  totalSeconds!: number;
  currentSeconds = 0;
  progressWidth = '0%';

  option: string = 'pomodoro';

  constructor() {
    this.updateTotalSeconds();
    this.selecTime();
  }

  playAudio(): void {
    const audio = new Audio();
    audio.src = 'assets/Coi-bao-thuc-trong-quan-doi-Ken.mp3';
    audio.load();
    audio.play();
  }

  setOption(option: string): void {
    this.option = option;
    this.selecTime();
  }

  selecTime(): void {
    switch (this.option) {
      
      case 'pomodoro':
        clearInterval(this.timer);

        this.started = false;
        this.minutes = 25;

        break;
      case 'short':
        clearInterval(this.timer);

        this.started = false;
        this.minutes = 5;

        break;
      case 'long':
        clearInterval(this.timer);

        this.started = false;
        this.minutes = 15;

        break;
    
    }
    this.seconds = '00';
    this.updateTotalSeconds();
    this.currentSeconds = 0;
    this.progressWidth = '0%';
  }
  updateTotalSeconds(): void {
    this.totalSeconds = this.minutes * 60;
  }

  start(): void {
    if (!this.started) {
      this.started = true;
      // this.playAudio();
      // console.log(this.playAudio());
      this.timer = setInterval(() => {
        this.updateTime();
      }, 1000);
    }
  }
  
  pause(): void {
    if (this.started) {
      clearInterval(this.timer);
      this.started = false;
    }
  }
  updateTime(): void {
    if (this.seconds === '00') {
      if (this.minutes === 0) {
        clearInterval(this.timer);
        this.started = false;
        this.playAudio();
        // alert('Time is up');
      } else {
        this.minutes--;
        this.seconds = '59';
      }
    } else {
      let secondsNumber = parseInt(this.seconds);
      secondsNumber--;
      this.seconds =
        secondsNumber < 10
          ? '0' + secondsNumber.toString()
          : secondsNumber.toString();
    }

    this.currentSeconds++;
    this.updateProgress();
  }

  updateProgress(): void {
    const progressPercentage = (this.currentSeconds / this.totalSeconds) * 100;
    this.progressWidth = `${progressPercentage}%`;
  }

  

  stop(): void {
    clearInterval(this.timer);
    this.started = false;
    this.minutes = 25;
    this.seconds = '00';
    this.currentSeconds = 0;
    this.progressWidth = '0%';
    this.updateTotalSeconds();
  }
}
