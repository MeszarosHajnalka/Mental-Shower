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
  zoneList: Zone[];
  //zoneListThisRoom=[];
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
    localStorage.setItem('class',this.roomSelected.class_id)
    //this.roomSelected.class_id
     this.zoneService.getClass(this.roomSelected.class_id)
     
     .subscribe(       
      data => {
        this.zoneList = data;
        console.log(this.zoneList, "kisttt");
        //this.zoneListThisRoom = this.zoneListt
        console.log(this.zoneList," this is the ZONELIST, "+  " <- the otherone ")
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
          console.log(this.classroomList)
          
        },
        error => {
          console.log(error);
        });
  }
  // There is a folder services inside I have the model and the service file with all the methods, havet tested them all but thye should work.
  // just change the LOCAL port so it actually works 😂

  isakTest(value) {
    if(value=='FrontLeft'){
      console.log("FrontLeft was CLICKED motherforker")
     this.zoneList.forEach(i => {
      { if (i.description == "FrontLeft" )
       {
        localStorage.setItem("zone",i.zone_id);
       
       }
        
      }});
      console.log(this.zoneList)
    }
    if(value=="FrontRight"){
      console.log("FrontLeft was CLICKED motherforker")
      this.zoneList.forEach(i => {
        { if (i.description == "FrontRight" )
         {
          localStorage.setItem("zone",i.zone_id);
         
         }
          
        }});
        console.log(this.zoneList)
    }
    if(value=="BackLeft"){
      console.log("FrontLeft was CLICKED motherforker")
      this.zoneList.forEach(i => {
        { if (i.description == "BackLeft" )
         {
          localStorage.setItem("zone",i.zone_id);
         
         }
          
        }});
        console.log(this.zoneList)
    }
    if(value=="BackRight"){
      console.log("FrontLeft was CLICKED motherforker")
      this.zoneList.forEach(i => {
        { if (i.description == "BackLeft" )
         {
          localStorage.setItem("zone",i.zone_id);
         
         }
          
        }});
        console.log(this.zoneList)
    }
    /*else{
      console.log("Something went wrong none of the params matched!!! it do be broken man ")
    }*/

    console.log(localStorage.getItem('zone'), " <- the ID of the zone that was assigned")
  }
}
