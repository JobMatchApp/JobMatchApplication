import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  users : Array<any> =  [
    {
      name: 'Jane Doe',
      age: 25,
      bio: 'I love to travel and try new foods!',
      image: 'assets/photo/tof12.jpg',
    },
    {
      name: 'John Smith',
      age: 28,
      bio: 'Looking for someone to join me on my next adventure.',
      image: 'assets/photo/tof13.jpg',
    },
    {
      name: 'Sarah Johnson',
      age: 31,
      bio: 'Wine and pizza enthusiast.',
      image: 'assets/photo/tof14.jpg',
    },
    {
      name: 'Mike Davis',
      age: 24,
      bio: 'Musician and dog lover.',
      image: 'assets/photo/tof15.jpg',
    },
  ];

  startX:number = 0;
  endX:number = 0;

  constructor(){}


  touchStart(evt:any){
    this.startX = evt.touches[0].pageX;

  }


  touchMove(evt:any, index:number){
    let deltaX = this.startX - evt.touches[0].pageX;
    let deg = deltaX / 10;
    this.endX = evt.touches[0].pageX;



    (<HTMLStyleElement>document.getElementById("card-"+index)).style.transform = "translateX(" + -deltaX+"px) rotate("+-deg+"deg)";

  }


  toucheEnd(index:number){

  }


  ngOnInit(): void {
    
  }
}
