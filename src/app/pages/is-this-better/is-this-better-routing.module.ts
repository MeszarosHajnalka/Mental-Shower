import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsThisBetterPage } from './is-this-better.page';

const routes: Routes = [
  {
    path: '',
    component: IsThisBetterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsThisBetterPageRoutingModule {}
