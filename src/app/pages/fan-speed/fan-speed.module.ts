import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FanSpeedPageRoutingModule } from './fan-speed-routing.module';

import { FanSpeedPage } from './fan-speed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FanSpeedPageRoutingModule
  ],
  declarations: [FanSpeedPage]
})
export class FanSpeedPageModule {}
