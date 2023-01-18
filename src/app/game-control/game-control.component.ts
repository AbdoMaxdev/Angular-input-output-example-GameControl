import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  interval : any;
  countNumber : number = 0;
  @Output() startincrement = new EventEmitter<Number>();

  startIncrement(){
    this.interval = setInterval(()=>{
      this.startincrement.emit(this.countNumber);
      this.countNumber += 1; 
    }, 100);
  }

  stpIncrement(){
    clearInterval(this.interval);
  }


}
