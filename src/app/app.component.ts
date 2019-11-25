import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameEvnOdd';
  value: number = 0;
  onCounted(count){
    console.log("APP COMPONENT: "+count);
    this.value=count;
    
  }
  isOdd(){
    console.log(this.value);
    if(this.value % 2 === 0 ){
      return false;
    }else{
      return true;
    }
  }

}
