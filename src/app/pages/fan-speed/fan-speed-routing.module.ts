import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FanSpeedPage } from './fan-speed.page';

const routes: Routes = [
  {
    path: '',
    component: FanSpeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FanSpeedPageRoutingModule {}
