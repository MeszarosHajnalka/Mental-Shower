import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroduceStepPageRoutingModule } from './introduce-step-routing.module';

import { IntroduceStepPage } from './introduce-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroduceStepPageRoutingModule
  ],
  declarations: [IntroduceStepPage]
})
export class IntroduceStepPageModule {}
