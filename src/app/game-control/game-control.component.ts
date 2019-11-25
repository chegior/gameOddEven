import { Component, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']

})
export class GameControlComponent implements OnInit {
  //variable counter that will count from 0 or continue
  counter:number = 0;
  
  
  
  
  //variable timer is ID that allows to use 
  //the clearInterval() method to cancel the timer
  timer:any; 
  constructor() { }

  ngOnInit() {

  }

  onStart(){
    this.timer = setInterval(()=>{
      this.counter++
      console.log(this.counter);
    },1000)
  }

  onStop(){
    clearInterval(this.timer);
    console.log(this.counter);
  }

}
