import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FanSpeedUpdatePageRoutingModule } from './fan-speed-update-routing.module';

import { FanSpeedUpdatePage } from './fan-speed-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FanSpeedUpdatePageRoutingModule
  ],
  declarations: [FanSpeedUpdatePage]
})
export class FanSpeedUpdatePageModule {}
