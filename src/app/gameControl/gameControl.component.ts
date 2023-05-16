import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  template: `
    <div>
      <button (click)="startGame()">Start Game</button>
      <button (click)="stopGame()">Stop Game</button>
    </div>
  `,
})
export class GameControlComponent {
  @Output() numberGenerated = new EventEmitter<number>();
  interval: any;
  counter = 1;

  startGame() {
    this.interval = setInterval(() => {
      this.emitEvent(this.counter++);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

  emitEvent(number: number) {
    this.numberGenerated.emit(number);
  }
}
