import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../util/constants';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  username: string;
  password: String;
  loading: boolean;

  constructor(
    private alertController: AlertController,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  loginUser() {
    this.loading = true;
    if (!this.username || !this.password) {
      this.presentNotification(
        'Oops',
        'You must enter your username and password...',
        ['Got it']
      );
      return;
    }
    this.httpClient
      .post(
        Constants.DOMAIN + 'user/login',
        {
          username: this.username,
          password: this.password,
        },
        { observe: 'response' }
      )
      .subscribe(
        (resp) => {
          this.loading = false;
          if (resp.status == 200 || resp.status == 204) {
            //console.log(resp.body);
            sessionStorage.setItem('currentUserToken', resp.body['token']);
            
            sessionStorage.setItem('user',this.username)
            sessionStorage.setItem('alreadyInAGroup','false')
            this.router.navigate(['/tabs/how-do-you-feel']);
          }
        },
        (err) => {
          console.log(err);
          this.presentNotification(
            'Oops',
            'Your password or username is incorrect... Try again.',
            ['Got it']
          );
        }
      );
    
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
  }

  ngOnInit() {}
}
