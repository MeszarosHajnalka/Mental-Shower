import { ZoneService } from './../services/dbservices/zone.service';
import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../services/dbservices/classroom.service';
import { Classroom } from '../services/models/classroom.model';
import { Zone } from '../services/models/zone.model';


@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.page.html',
  styleUrls: ['./group-page.page.scss'],
})
export class GroupPagePage implements OnInit {
  classroomList: Classroom[];
  zoneListt: Zone;
  public roomSelected:any;
  public roomIsSelected:boolean;
  b1;

  constructor(  
    private classroomService:ClassroomService,
    private zoneService: ZoneService
  ) { }

  ngOnInit() {
    this.retrieveRooms();
    this.roomIsSelected = false;
  }
  //just checking the values, and assigning the roomIsSelected so we can get the zoones to apear 😅
  roomWasSelected() { 
    console.log(this.roomSelected.class_id)
     this.zoneService.get(this.roomSelected.class_id)
     
     .subscribe(
       
      data => {
        this.zoneListt = data;
        console.log(this.zoneListt, "kisttt");
        
      },
      error => {
        console.log(error);
      });

    
    //console.log(this.roomIsSelected);
    //console.log(this.roomSelected.class_id);
    this.roomIsSelected=true;
    //console.log(this.roomIsSelected)
      //this.b1=this.zoneListt[0].zone_id;
     // console.log(this.zoneListt[0].zone_id,"ID")
  }
  
//my get method 
  retrieveRooms(): void {
    this.classroomService.getAll()
      .subscribe(
        data => {
          this.classroomList = data;
          
        },
        error => {
          console.log(error);
        });
  }
  // There is a folder services inside I have the model and the service file with all the methods, havet tested them all but thye should work.
  // just change the LOCAL port so it actually works 😂

  isakTest() {
    
  }
}
