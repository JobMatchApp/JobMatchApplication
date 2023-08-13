import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: any; // Déclaration de la propriété user

  constructor() {
    this.user = { name: 'John Doe', age: 30, bio: 'Some bio text' };
  }

}
