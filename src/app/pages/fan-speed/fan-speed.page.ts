import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-fan-speed',
  templateUrl: './fan-speed.page.html',
  styleUrls: ['./fan-speed.page.scss'],
})
export class FanSpeedPage implements OnInit {
  humidity: Number = 50;
  temperature: Number = 50;
  airspeed: Number = 50;

  isUpdate: boolean = false;

  preferenceToUpdate: object;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state.preference) {
        let preference = this.router.getCurrentNavigation().extras.state
          .preference;
        this.isUpdate = true;
        this.humidity = preference.humidity;
        this.temperature = preference.temperature;
        this.airspeed = preference.airspeed;
        this.preferenceToUpdate = preference;
      }
    });
  }

  ngOnInit() {}

  confirmSelection() {
    console.log(this.humidity, this.temperature, this.airspeed);

    if (!this.validateSliderData()) return;

    if (this.isUpdate) {
      this.preferenceToUpdate['humidity'] = this.humidity;
      this.preferenceToUpdate['airspeed'] = this.airspeed;
      this.preferenceToUpdate['temperature'] = this.temperature;

      this.httpClient
        .put(Constants.DOMAIN + 'preference', this.preferenceToUpdate, {
          observe: 'response',
        })
        .subscribe(
          (resp) => {
            if (
              resp.status == 200 ||
              resp.status == 201 ||
              resp.status == 204
            ) {
              this.router.navigate(['/favourites']);
            }
          },
          (err) => {
            console.log(err);
          }
        );

      return;
    }

    let preferenceData = {
      humidity: this.humidity,
      temperature: this.temperature,
      airspeed: this.airspeed,
    };

    let navigationData: NavigationExtras = {
      state: {
        preferenceData,
      },
    };

    this.router.navigate(['board'], navigationData);
  }

  validateSliderData() {
    return this.humidity && this.temperature && this.airspeed;
  }
}
