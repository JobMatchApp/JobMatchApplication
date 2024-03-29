import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  users : Array<any> =  [
    {
      name: 'Tesla',
      age: 'Developpeur-front',
      bio: 'Nous cherchons un dev front',
      image: 'assets/photo/Tesla.jpg',
    },
    {
      name: 'entretech',
      age: 'Developpeur-back',
      bio: 'Nous cherchons un dev',
      image: 'assets/photo/logoetp.jpg',
    },
    {
      name: 'pc tech',
      age: 'Developpeur-front',
      bio: 'Nous cherchons un dev',
      image: 'assets/photo/ttp.jpg',
    },
    {
      name: 'Apple',
      age: 'Developpeur-back',
      bio: 'Nous cherchons un dev',
      image: 'assets/photo/apple.png',
    },
  ];

  // Fonction pour faire défiler les cartes vers la gauche
  scrollLeft() {
    // Déplace le premier utilisateur à la fin du tableau
    const firstUser = this.users.shift();
    this.users.push(firstUser);

    // Réinitialise les styles de transition et de transformation
    this.resetCardStyles();
  }

  // Fonction pour faire défiler les cartes vers la droite
  scrollRight() {
    // Déplace le dernier utilisateur au début du tableau
    const lastUser = this.users.pop();
    this.users.unshift(lastUser);

    // Réinitialise les styles de transition et de transformation
    this.resetCardStyles();
  }
  // Réinitialise les styles de transition et de transformation pour toutes les cartes
  resetCardStyles() {
    for (let i = 0; i < this.users.length; i++) {
      const cardElement = document.getElementById(`card-${i}`);
      if (cardElement) {
        cardElement.style.transition = '.3s';
        cardElement.style.transform = 'translateX(0px) rotate(0deg)';
      }
    }

     // Réinitialise l'opacité des icônes de rejet
     const rejectIcon = document.getElementById('reject-icon');
     if (rejectIcon) {
       rejectIcon.style.opacity = '0';
     }
   }
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

    if((this.endX - this.startX) < 0) {
      (<HTMLStyleElement>document.getElementById("reject-icon")).style.opacity = String(deltaX / 10);
    }

  }


  toucheEnd(index:number){
    if (this.endX > 0){
      let finalX = this.endX - this.startX;
      
      if (finalX > -10 && finalX < 10) {
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transition = ".3s";
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = "translateX(0px) rotate(0deg)";

        setTimeout(() => {
          (<HTMLStyleElement>document.getElementById("card-" + index)).style.transition = ".0s";
        }, 350);
      }
      else if (finalX <= -10) {
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transition = ".1s";
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = "translateX(-1000px) rotate(-30deg)";


        setTimeout(() => {
          this.users.splice(index, 1);
        }, 100);
      }
      else if (finalX >= 10) {
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transition = ".1s";
        (<HTMLStyleElement>document.getElementById("card-" + index)).style.transform = "translateX(-1000px) rotate(-30deg)";

        setTimeout(() => {
          this.users.splice(index, 1);
        }, 10);
      }
    }

  }


  ngOnInit(): void {
    
  }
}
