import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../util/constants';
import { JwtService } from '../../util/jwtService';

@Component({
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss'],
})
export class BoardPage implements OnInit {
  preferenceData: any;
  preferenceName: string;
  inGroup = sessionStorage.getItem('inGroup');

  constructor(
    private jwtService: JwtService,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.preferenceData =
        this.router.getCurrentNavigation().extras.state.preferenceData;
    });
  }

  savePreference() {
    //console.log('pref');
    if (!this.validateData()) return;

    const token = this.jwtService.getDecodedAccessToken(
      sessionStorage.getItem('currentUserToken')
    );

    let preference = {
      user_id: token['id'],
      name: this.preferenceName,
      temperature: this.preferenceData.temperature,
      humidity: this.preferenceData.humidity,
      airspeed: this.preferenceData.airspeed,
    };

    this.httpClient
      .post(Constants.DOMAIN + 'preference', preference, {
        observe: 'response',
      })
      .subscribe(
        (resp) => {
          if (resp.status == 200 || resp.status == 201 || resp.status == 204) {
           if(this.inGroup=='true'){
            this.router.navigate(['/select-fav-page']);
          }
          else{
            //console.log(preference);
            this.router.navigate(['/tabs/favourites']);
          }
           
          }
        },
        (err) => {
          console.log('error', err);
        }
      );
  }

  validateData() {
    return this.preferenceData && this.preferenceName;
  }

  ngOnInit() {}
}
