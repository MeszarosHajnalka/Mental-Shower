import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowDoYouFeelPage } from './how-do-you-feel.page';

const routes: Routes = [
  {
    path: '',
    component: HowDoYouFeelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowDoYouFeelPageRoutingModule {}
