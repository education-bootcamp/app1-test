import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedImage='https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg';
  constructor() {
    setInterval(()=>{
      let rand= Math.floor(Math.random()*(4-0+1))+0;
      this.selectedImage = this.dataArray[rand];
    },2000);
  }

  dataArray:any[]=[
    'https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg',
    'https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg',
    'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2Njc0ODUxNzAyODQzMTk4/colors-of-siberian-huskies.png',
    'https://animalcorner.org/wp-content/uploads/2020/06/Husky-Dog-1-e1591284354778.jpg',
    'https://media-be.chewy.com/wp-content/uploads/2021/06/01091720/Siberian-Husky_FeaturedImage.jpg'
  ];


}
