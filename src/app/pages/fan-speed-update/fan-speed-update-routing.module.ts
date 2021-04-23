import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FanSpeedUpdatePage } from './fan-speed-update.page';

const routes: Routes = [
  {
    path: '',
    component: FanSpeedUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FanSpeedUpdatePageRoutingModule {}
