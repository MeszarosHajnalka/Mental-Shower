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
  public typeStyle1;
  public typeStyle2;
  public typeStyle3;
  public typeStyle4;
  public typeStyle5;
  public typeStyleD1;
  public typeStyleD2;
  public typeStyleD3;
  public typeStyleD4;
  public typeStyleD5;
  public typeStyleT1;
  public typeStyleT2;
  public typeStyleT3;
  public typeStyleT4;
  public typeStyleT5;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) 
  {
    // try {
    //   console.log(this.router.getCurrentNavigation().extras.state.preference);
    //   this.route.queryParams.subscribe((params) => {
    //     if (this.router.getCurrentNavigation().extras.state.preference) {
    //       let preference = this.router.getCurrentNavigation().extras.state
    //         .preference;
    //       if (preference) {
    //         this.isUpdate = true;
    //         this.humidity = preference.humidity;
    //         this.temperature = preference.temperature;
    //         this.airspeed = preference.airspeed;
    //         this.preferenceToUpdate = preference;
    //       }
    //     }
    //   });
    // } catch (err) {
    //   console.log(err);
    //   //TODO: handle
    // }
  }

  ngOnInit() {
   
  }

  confirmSelection() {
    //console.log(this.humidity, this.temperature, this.airspeed);
    //localStorage.setItem('currentUserStuff', "Isak preference in a String value 5");

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
              this.router.navigate(['/tabs/favourites']);
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
  valueChange(){
    //console.log(this.airspeed)
    if (this.airspeed >0 && this.airspeed <20 ) {
      this.typeStyle1 = "red"
      this.typeStyle2 = "gray"
      this.typeStyle3 = "gray"
      this.typeStyle4 = "gray"
      this.typeStyle5 = "gray"
      //console.log(this.typeStyle1)
      }
    if (this.airspeed >21 &&this.airspeed <40 ) {
      this.typeStyle1 = "purple"
      this.typeStyle2 = "purple"
      this.typeStyle3 = "gray"
      this.typeStyle4 = "gray"
      this.typeStyle5 = "gray"
    
    }
    if (this.airspeed >41 &&this.airspeed <60 ) {
      this.typeStyle1 = "plum"
      this.typeStyle2 = "plum"
      this.typeStyle3 = "plum"
      this.typeStyle4 = "gray"
      this.typeStyle5 = "gray"
     
    }
    if (this.airspeed >61 &&this.airspeed <80 ) {
      this.typeStyle4 = "lightblue-2"
      this.typeStyle3 = "lightblue-2"
      this.typeStyle1 = "lightblue-2"
      this.typeStyle2 = "lightblue-2"
      this.typeStyle5 = "gray"
    }
    if (this.airspeed >81 &&this.airspeed <100 ) {
      this.typeStyle4 = "blue"
      this.typeStyle3 = "blue"
      this.typeStyle1 = "blue"
      this.typeStyle2 = "blue"
      this.typeStyle5 = "blue"
    }
  }
  valueChangeHum(){
    //console.log(this.humidity)
    if (this.humidity >0 && this.humidity <20 ) {
      this.typeStyleD1 = "lightblue-1"
      this.typeStyleD2 = "gray"
      this.typeStyleD3 = "gray"
      this.typeStyleD4 = "gray"
      this.typeStyleD5 = "gray"
      //console.log(this.typeStyle1)
      }
    if (this.humidity >21 &&this.humidity <40 ) {
      this.typeStyleD1 = "lightblue-2"
      this.typeStyleD2 = "lightblue-2"
      this.typeStyleD3 = "gray"
      this.typeStyleD4 = "gray"
      this.typeStyleD5 = "gray"
    
    }
    if (this.humidity >41 &&this.humidity <60 ) {
      this.typeStyleD1 = "blue2"
      this.typeStyleD2 = "blue2"
      this.typeStyleD3 = "blue2"
      this.typeStyleD4 = "gray"
      this.typeStyleD5 = "gray"
     
    }
    if (this.humidity >61 &&this.humidity <80 ) {
      this.typeStyleD4 = "blue3"
      this.typeStyleD3 = "blue3"
      this.typeStyleD1 = "blue3"
      this.typeStyleD2 = "blue3"
      this.typeStyleD5 = "gray"
    }
    if (this.humidity >81 &&this.humidity <100 ) {
      this.typeStyleD4 = "blue"
      this.typeStyleD3 = "blue"
      this.typeStyleD1 = "blue"
      this.typeStyleD2 = "blue"
      this.typeStyleD5 = "blue"
    }
  }
  valueChangeTemp(){
    //console.log(this.airspeed)
    if (this.temperature >0 && this.temperature <20 ) {
      this.typeStyleT1 = "blue"
      this.typeStyleT2 = "gray"
      this.typeStyleT3 = "gray"
      this.typeStyleT4 = "gray"
      this.typeStyleT5 = "gray"
      //console.log(this.typeStyle1)
      }
    if (this.temperature >21 &&this.temperature <40 ) {
      this.typeStyleT1 = "lightblue-2"
      this.typeStyleT2 = "lightblue-2"
      this.typeStyleT3 = "gray"
      this.typeStyleT4 = "gray"
      this.typeStyleT5 = "gray"
    
    }
    if (this.temperature >41 &&this.temperature <60 ) {
      this.typeStyleT1 = "plum"
      this.typeStyleT2 = "plum"
      this.typeStyleT3 = "plum"
      this.typeStyleT4 = "gray"
      this.typeStyleT5 = "gray"
     
    }
    if (this.temperature >61 &&this.temperature <80 ) {
      this.typeStyleT4 = "purple"
      this.typeStyleT3 = "purple"
      this.typeStyleT1 = "purple"
      this.typeStyleT2 = "purple"
      this.typeStyleT5 = "gray"
    }
    if (this.temperature >81 &&this.temperature <100 ) {
      this.typeStyleT4 = "red"
      this.typeStyleT3 = "red"
      this.typeStyleT1 = "red"
      this.typeStyleT2 = "red"
      this.typeStyleT5 = "red"
    }
  }
}
