import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDisabled=false;
/*  changeState(){
    // this.isDisabled=!this.isDisabled;
    /!*if (this.isDisabled){
      this.isDisabled=false;
    }else{
      this.isDisabled=true;
    }*!/
  }*/
}
