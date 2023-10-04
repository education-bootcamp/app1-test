import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name='Kamal';
  imageUrl='https://storage.googleapis.com/pod_public/1300/159526.jpg';
  click(){
    this.name='Bandara';
  }

  animal='Dog';
  changeAnimal(animalName:string){
    this.animal=animalName;
  }

}
