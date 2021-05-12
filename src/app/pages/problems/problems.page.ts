import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.page.html',
  styleUrls: ['./problems.page.scss'],
})
export class ProblemsPage implements OnInit {

  constructor(private router: Router) { }

  buttonEvent(type){
    let navigationData: NavigationExtras = {
      state: {
        type,
      },
    };
    this.router.navigate(['did-you-know'], navigationData);
  }

  ngOnInit() {
  }

}
