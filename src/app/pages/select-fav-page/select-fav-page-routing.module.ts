import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectFavPagePage } from './select-fav-page.page';

const routes: Routes = [
  {
    path: '',
    component: SelectFavPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectFavPagePageRoutingModule {}
