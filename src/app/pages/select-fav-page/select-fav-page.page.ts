import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../util/constants';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { JwtService } from '../../util/jwtService';
import { ZoneRecordService } from '../../services/dbservices/zone_record.service';


@Component({
  selector: 'select-fav-page',
  templateUrl: './select-fav-page.page.html',
  styleUrls: ['./select-fav-page.page.scss'],
})
export class SelectFavPagePage implements OnInit {

  preferences: any = [];
  zonePrefExists :boolean = true;

  constructor(
    private jwtService: JwtService,
    private alertController: AlertController,
    private httpClient: HttpClient,
    private router: Router,
    private zoneRecordService: ZoneRecordService
  ) {
    //this.fetchPreferences();
  }

  ngOnInit() {
    this.fetchPreferences();
    this.check();
  }

  fetchPreferences() {
    const token = this.jwtService.getDecodedAccessToken(
      sessionStorage.getItem('currentUserToken')
    );

    this.httpClient
      .get(Constants.DOMAIN + `preference/${token['id']}`)
      .subscribe((data) => {
        this.preferences = data;
      });
   
  }
  check(){
    const token = this.jwtService.getDecodedAccessToken(
      sessionStorage.getItem('currentUserToken')
    );
    this.zoneRecordService.get(token['id'])
    
    .subscribe((data) => {
      console.log(data)
      if(data.length==0){
        this.zonePrefExists=false;
        console.log(this.zonePrefExists)
      }
      
    });
  }
  

  deletePreference(e: Event, preferenceId) {
    e.stopPropagation();

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

  editPreference(e: Event, preference) {
    e.stopPropagation();
    let navigationData: NavigationExtras = {
      state: {
        preference,
      },
    };
    this.router.navigate(['fan-speed-update'], navigationData);
  }

  async selectPreference(preference) {
    const token = this.jwtService.getDecodedAccessToken(
      sessionStorage.getItem('currentUserToken')
    );
    const alerty = await this.alertController.create({
      header: 'Success',
      message: 'Favourite selected',
      buttons: ['Great, bring me back!'],
    });
    localStorage.setItem('selectedPreference', preference.id);
    console.log(localStorage.getItem('selectedPreference'));
    const record={
      
      zone_id: localStorage.getItem('zone'),
      user_pref_id: preference.id,
      user_id:token['id']
      
    }
    console.log(record);
    if(this.zonePrefExists==false){

      console.log("ITS IN CREATE")
    this.zoneRecordService.create(record)
    .subscribe(
      response => {
        console.log(response);
       
      },
      error => {
        console.log(error);
      })
    await alerty.present();
    let result = await alerty.onDidDismiss();
   this.router.navigate(['tabs/how-do-you-feel']);
  }
  if (this.zonePrefExists==true) {
    console.log("ITS IN UPFATE")
    this.zoneRecordService.update(record.user_id,record)
    .subscribe(
      response => {
        console.log(response);
       
      },
      error => {
        console.log(error);
      })
    await alerty.present();
    let result = await alerty.onDidDismiss();
   this.router.navigate(['tabs/how-do-you-feel']);
    
  }
  }
  
}
