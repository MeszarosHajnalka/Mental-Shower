import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DidYouKnowPage } from './did-you-know.page';

const routes: Routes = [
  {
    path: '',
    component: DidYouKnowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DidYouKnowPageRoutingModule {}
