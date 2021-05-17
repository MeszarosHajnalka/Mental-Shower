import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-do-you-feel',
  templateUrl: './how-do-you-feel.page.html',
  styleUrls: ['./how-do-you-feel.page.scss'],
})
export class HowDoYouFeelPage implements OnInit {
  constructor(
    private router: Router,
    public alertController: AlertController
    
  ) {}
  // public username: string = sessionStorage.getItem('user')
  logout() {
    sessionStorage.removeItem('currentUserToken');
    this.router.navigate(['sign-in']);
  }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alertClass',
      header: 'Breathy',
      subHeader: 'The study healper',
      message: 'Hi im Breathy, and here to service you!',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
