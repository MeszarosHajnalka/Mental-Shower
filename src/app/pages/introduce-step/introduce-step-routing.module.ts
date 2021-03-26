import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroduceStepPage } from './introduce-step.page';

const routes: Routes = [
  {
    path: '',
    component: IntroduceStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroduceStepPageRoutingModule {}
