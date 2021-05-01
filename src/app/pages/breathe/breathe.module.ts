import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { BreathePageRoutingModule } from './breathe-routing.module';
import { BreathePage } from './breathe.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreathePageRoutingModule
  ],
})

export class BreathePageModule {}
