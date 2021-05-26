import { Preference } from './../../services/models/preference.model';
import { PreferenceService } from './../../services/dbservices/preference.service';
import { ZoneRecord } from './../../services/models/zonerecord.model';
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

  public allHum;
  public allTemp;
  public allAir;
  public allPref;

  constructor(
    private jwtService: JwtService,
    private alertController: AlertController,
    private httpClient: HttpClient,
    private router: Router,
    private zoneRecordService: ZoneRecordService,
    private preferenceService: PreferenceService
  ) {
    //this.fetchPreferences();
  }

  ngOnInit() {
    this.fetchPreferences();
    this.check();
    sessionStorage.setItem('inGroup', 'true')
  }
  /*ngDoCheck() {
    console.log('how many check');
    //this.fetchPreferences();
  }

  ngOnChange() {
    console.log("change");
  }*/

  ngAfterContentInit() {
    this.fetchPreferences();
  }
  

   async calcZone(zoneId) {
    var classRoomName = localStorage.getItem('className');;
    var zoneName = localStorage.getItem('zoneName');
     this.allHum = 0;
    this.allTemp = 0;
    this.allAir = 0;
    this.allPref = 0;
    this.zoneRecordService.getByZone(zoneId).subscribe((data) => {
        data.forEach(record => {
          //console.log(record.user_pref_id);
          this.preferenceService.get(record.user_pref_id)
          .subscribe((data) => {
            this.allHum = this.allHum + data.humidity;
            this.allTemp = this.allTemp + data.temperature;
            this.allAir = this.allAir + data.airspeed;
            this.allPref = this.allPref + 1;
            
            console.log("Zone: "+zoneName+ " in "+ classRoomName +'\n'+"is calculated with "+ this.allPref 
      + " preferences" + '\n' + " Humidity:" + this.allHum/this.allPref + '\n' + " Temperature:"+this.allTemp/this.allPref + '\n' + " AirFlow:"+this.allAir/this.allPref);

      
    });
      });
     
    });
    
   }

  fetchPreferences() {
    const token = this.jwtService.getDecodedAccessToken(
      sessionStorage.getItem('currentUserToken')
    );

    this.httpClient
      .get(Constants.DOMAIN + `preference/${token['id']}`)
      .subscribe((data) => {
        //console.log("i am the culprit");
        this.preferences = data;
      });
   
  }

  

  check(){
    const token = this.jwtService.getDecodedAccessToken(
      sessionStorage.getItem('currentUserToken')
    );
    this.zoneRecordService.get(token['id'])
    
    .subscribe((data) => {
      //console.log(data)
      if(data.length==0){
        this.zonePrefExists=false;
        //console.log(this.zonePrefExists)
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
      header: 'Awesome',
      message: 'Your preference are now taken into consideration!',
      buttons: ['Great, bring me back!'],
    });
    localStorage.setItem('selectedPreference', preference.id);
    //console.log(localStorage.getItem('selectedPreference'));
    const record={
      
      zone_id: localStorage.getItem('zone'),
      user_pref_id: preference.id,
      user_id:token['id']
      
    }
    //console.log(record);
    if(this.zonePrefExists==false){

      //console.log("ITS IN CREATE")
    this.zoneRecordService.create(record)
    .subscribe(
      response => {
        //console.log(response);
       
      },
      error => {
        console.log(error);
      })
    await alerty.present();
    let result = await alerty.onDidDismiss();
    await this.calcZone(record.zone_id);
   this.router.navigate(['tabs/how-do-you-feel']);
  }
  if (this.zonePrefExists==true) {
    //console.log("ITS IN UPFATE")
    this.zoneRecordService.update(record.user_id,record)
    .subscribe(
      response => {
        //console.log(response);
       
      },
      error => {
        console.log(error);
      })
    await alerty.present();
    let result = await alerty.onDidDismiss();
    sessionStorage.setItem('inGroup', 'false')
    sessionStorage.setItem('alreadyInAGroup','true')
    //console.log("in select and should be TRUE")
    await this.calcZone(record.zone_id);
   this.router.navigate(['tabs/how-do-you-feel']);
    
  }
  }
  
}
