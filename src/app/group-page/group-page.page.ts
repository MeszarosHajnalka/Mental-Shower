import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../services/dbservices/classroom.service';
import { Classroom } from '../services/models/classroom.model';


@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.page.html',
  styleUrls: ['./group-page.page.scss'],
})
export class GroupPagePage implements OnInit {
  classroomList: Classroom[];
  public roomSelected:any;
  public roomIsSelected:boolean;

  constructor(  
    private classroomService:ClassroomService
  ) { }

  ngOnInit() {
    this.retrieveRooms();
    this.roomIsSelected = false;
  }
  //just checking the values, and assigning the roomIsSelected so we can get the zoones to apear 😅
  roomWasSelected(){
    console.log(this.roomIsSelected);
    console.log(this.roomSelected, " was selected")
    this.roomIsSelected=true;
    console.log(this.roomIsSelected)

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
