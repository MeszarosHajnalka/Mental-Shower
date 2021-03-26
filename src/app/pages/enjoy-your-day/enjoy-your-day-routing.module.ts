import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnjoyYourDayPage } from './enjoy-your-day.page';

const routes: Routes = [
  {
    path: '',
    component: EnjoyYourDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnjoyYourDayPageRoutingModule {}
