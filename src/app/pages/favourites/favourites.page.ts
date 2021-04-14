import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  
  test(e){
    console.log("test", e)
  };

  constructor() { }

  ngOnInit() {
  }

}
