import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  constructor(private httpClient: HttpClient) {
    this.fetchPreferences();
  }

  preferences: any = [];

  fetchPreferences() {
    this.httpClient.get(Constants.DOMAIN + 'preference').subscribe((data) => {
      this.preferences = data;
    });
  }

  deletePreference(preferenceId) {
    this.httpClient
      .delete(Constants.DOMAIN + `preference/${preferenceId}`, {
        observe: 'response',
      })
      .subscribe((resp) => {
        if (resp.status == 200 || resp.status == 204) this.fetchPreferences();
        else {
          //TODO: Invoke alert to notiy failure
        }
      });
  }
  ngOnInit() {}
}
