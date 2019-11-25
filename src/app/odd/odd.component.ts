import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  type:string = 'Odd';
  @Input() textNumb;
  constructor() { }
 
  ngOnInit() {
  }


}
