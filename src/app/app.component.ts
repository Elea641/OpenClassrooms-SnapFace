import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myDou!: FaceSnap;
  myDoudou!: FaceSnap;
  myDoudidou!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  mySnap!: FaceSnap;

  ngOnInit(){
    this.mySnap = {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris'
    };
    this.myOtherSnap = {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Tokyo'
    };
    this.myLastSnap = {
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0
    };
    this.myDou = {
      title: 'Doudou',
      description: 'Tout tout doux',
      imageUrl: 'https://media.licdn.com/dms/image/C4D03AQH1H3PC1rOW_A/profile-displayphoto-shrink_800_800/0/1620434605775?e=1678320000&v=beta&t=P4whu9A36khuAtu8XtXal0nBon9IXIpAb6ATv7Lf6kU',
      createdDate: new Date(),
      snaps: 0
    };
    this.myDoudou = {
      title: 'Doudoudoudou',
      description: 'Tout tout doudoux',
      imageUrl: 'https://media.licdn.com/dms/image/C4D03AQH1H3PC1rOW_A/profile-displayphoto-shrink_800_800/0/1620434605775?e=1678320000&v=beta&t=P4whu9A36khuAtu8XtXal0nBon9IXIpAb6ATv7Lf6kU',
      createdDate: new Date(),
      snaps: 0
    };
    this.myDoudidou = {
      title: 'Doudidou',
      description: 'Tout tout doudidoux',
      imageUrl: 'https://media.licdn.com/dms/image/C4D03AQH1H3PC1rOW_A/profile-displayphoto-shrink_800_800/0/1620434605775?e=1678320000&v=beta&t=P4whu9A36khuAtu8XtXal0nBon9IXIpAb6ATv7Lf6kU',
      createdDate: new Date(),
      snaps: 0
    }
  }

}
