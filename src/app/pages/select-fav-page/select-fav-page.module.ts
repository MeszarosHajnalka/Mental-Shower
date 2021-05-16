import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectFavPagePageRoutingModule } from './select-fav-page-routing.module';

import { SelectFavPagePage } from './select-fav-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectFavPagePageRoutingModule
  ],
  declarations: [SelectFavPagePage]
})
export class SelectFavPagePageModule {}
