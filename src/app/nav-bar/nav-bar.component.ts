import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() dataEvent= new EventEmitter<string>;
  pushData(value:string){
    this.dataEvent.emit(value);
  }
}
