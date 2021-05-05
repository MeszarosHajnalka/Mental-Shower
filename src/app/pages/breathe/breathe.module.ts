import { BreathePage } from './breathe.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BreathePageRoutingModule } from './breathe-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreathePageRoutingModule
  ],
  declarations: [BreathePage]
})

export class BreathePageModule {}
