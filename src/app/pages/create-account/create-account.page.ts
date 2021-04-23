import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../util/constants';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  username: String;
  password_confirm: String;
  password: String;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    public alertController: AlertController
  ) {}

  createUser() {
    if (!this.validatePassword()) return;

    this.httpClient
      .post(
        Constants.DOMAIN + 'user',
        {
          username: this.username,
          password: this.password,
        },
        { observe: 'response' }
      )
      .subscribe(
        (resp) => {
          if (resp.status == 200 || resp.status == 204) {
            this.handleCreation();
          }
        },
        (err) => {
          console.log('error', err);
        }
      );
  }

  validatePassword() {
    return this.password === this.password_confirm;
  }

  async presentNotification(
    header: string,
    message: string,
    buttons: string[]
  ) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: buttons,
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async handleCreation() {
    await this.presentNotification(
      'Success',
      'Your account has been created. Now you can log in.',
      ["Let's go"]
    );
    this.router.navigate(['/sign-in']);
  }

  async handlerFailuer() {}

  ngOnInit() {}
}
