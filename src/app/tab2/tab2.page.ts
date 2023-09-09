import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  users = [
    {
      name: 'Cedric',
      age: 22,
      avatar: 'assets/photo/tof13.jpg',
      online: true,
      lastMessage: 'Salut, comment ça va ?',
    },
    {
      name: 'Megan',
      age: 25,
      avatar: 'assets/photo/tof12.jpg',
      online: false,
      lastMessage: 'Bonjour !',
    },
    {
      name: 'Eric',
      age: 22,
      avatar: 'assets/photo/tof14.jpg',
      online: true,
      lastMessage: 'Quoi de neuf ?',
    },
    {
      name: 'Céline test',
      age: 28,
      avatar: 'assets/photo/tof15.jpg',
      online: true,
      lastMessage: 'Salut, ça fait longtemps !',
    },
  ];

  newMessage: string = '';

  
  constructor() {}

   // Cette fonction sera appelée lorsque l'utilisateur cliquera sur le bouton "Envoyer"
   sendMessage() {
    // Récupérez le message depuis newMessage et effectuez des opérations de traitement ici
    const messageToSend = this.newMessage;

    // Vous pouvez ensuite envoyer le message à l'utilisateur approprié, par exemple, le premier utilisateur
    // Dans la réalité, vous voudrez implémenter la logique de gestion des conversations
    this.users[0].lastMessage = messageToSend;

    // Effacez le champ de saisie après l'envoi
    this.newMessage = '';
  }





}
