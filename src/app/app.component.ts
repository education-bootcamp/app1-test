import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  message='this data object is from the Parent component!';
  childData:string='';
  setData(event:any){
    this.childData=event;
  }

}
