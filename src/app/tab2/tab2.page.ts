import { Component } from '@angular/core';

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
  constructor() {}

}
