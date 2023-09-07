import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Etes vous sur ?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Non',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Oui',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }

  sauvegarderClicked() {
    // Récupérez les éléments HTML
    const resultDiv = document.getElementById('result');
    console.log(resultDiv);
    if (resultDiv) {
      const prenomInput = document.getElementById('prenomInput') as HTMLInputElement;
      const nomInput = document.getElementById('nomInput') as HTMLInputElement;
      const ageInput = document.getElementById('ageInput') as HTMLInputElement;
      const villeInput = document.getElementById('villeInput') as HTMLInputElement;
      const metierInput = document.getElementById('metierInput') as HTMLInputElement;
      const bioInput = document.getElementById('bioInput') as HTMLInputElement;
  
      // Récupérez les valeurs saisies par l'utilisateur
      const prenom = prenomInput.value;
      const nom = nomInput.value;
      const age = ageInput.value;
      const ville = villeInput.value;
      const metier = metierInput.value;
      const bio = bioInput.value;
  
      // Vérifiez à nouveau si resultDiv existe (par mesure de sécurité)
      if (resultDiv) {
        resultDiv.innerHTML = `
          <p>Prénom: ${prenom}</p>
          <p>Nom: ${nom}</p>
          <p>Age: ${age}</p>
          <p>Ville: ${ville}</p>
          <p>Métier: ${metier}</p>
          <p>Bio: ${bio}</p>
        `;
      }
    }
  }
}


