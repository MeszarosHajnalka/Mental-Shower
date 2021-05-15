import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyRoutingModule } from './survey-routing.module';

import { SurveyComponent } from './survey.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyRoutingModule
  ],
  declarations: [SurveyComponent]
})
export class SurveyModule {}