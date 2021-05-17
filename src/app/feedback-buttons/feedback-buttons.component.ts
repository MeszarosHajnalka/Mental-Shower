import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feedback-buttons',
  templateUrl: './feedback-buttons.component.html',
  styleUrls: ['./feedback-buttons.component.scss'],
})
export class FeedbackButtonsComponent implements OnInit {
  public show:boolean = true;
  public text:string;
  constructor() {
    
   }

  ngOnInit() {
  }

  public username: string = sessionStorage.getItem('user')

  
setPrefTimeOut(f){
  this.show=!this.show;
  console.log(this.show);
  setTimeout(() => {
    console.log('show');
    this.show = true;
  }, 5000);
  if(f=="good"){
    console.log("good was pressed")
    this.text=" Great, we will keep up with the good work!"
    this.pressedGood();
  }
 
  if(f=="warm"){
    console.log("warm was pressed")
    this.text=" Thanks for the feedback, we will try to cool down the room!"
  }
  if(f=="cold"){
    console.log("cold was pressed")
    this.text=" Thanks for the feedback, we will try to warm up the room!"
  }
  

}
pressedGood(){
console.log("logic here");

};
pressedCold(){

};

}