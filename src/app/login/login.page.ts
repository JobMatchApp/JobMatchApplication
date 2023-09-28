import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(    private navCtrl: NavController,
    private router: Router) { 

  }

  goToTab1() {
    this.router.navigate(['./home']);
  }

  

  ngOnInit() {
  }

}
