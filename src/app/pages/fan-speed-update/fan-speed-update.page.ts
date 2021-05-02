import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-fan-speed-update',
  templateUrl: './fan-speed-update.page.html',
  styleUrls: ['./fan-speed-update.page.scss'],
})
export class FanSpeedUpdatePage implements OnInit {
  humidity: Number = 50;
  temperature: Number = 50;
  airspeed: Number = 50;
  loading: Boolean;

  isUpdate: boolean = false;

  preferenceToUpdate: object;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) {
    try {
      this.route.queryParams.subscribe((params) => {
        if (this.router.getCurrentNavigation().extras.state.preference) {
          let preference = this.router.getCurrentNavigation().extras.state
            .preference;
          if (preference) {
            this.isUpdate = true;
            this.humidity = preference.humidity;
            this.temperature = preference.temperature;
            this.airspeed = preference.airspeed;
            this.preferenceToUpdate = preference;
          }
        }
      });
    } catch (err) {
      //TODO: handle
    }
  }

  ngOnInit() {}

  confirmSelection() {
    this.loading = true;
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
      this.loading = false;
    }
  }

  validateSliderData() {
    return this.humidity && this.temperature && this.airspeed;
  }
}
