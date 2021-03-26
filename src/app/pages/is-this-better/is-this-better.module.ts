import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsThisBetterPageRoutingModule } from './is-this-better-routing.module';

import { IsThisBetterPage } from './is-this-better.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsThisBetterPageRoutingModule
  ],
  declarations: [IsThisBetterPage]
})
export class IsThisBetterPageModule {}
