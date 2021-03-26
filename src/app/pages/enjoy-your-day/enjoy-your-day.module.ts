import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnjoyYourDayPageRoutingModule } from './enjoy-your-day-routing.module';

import { EnjoyYourDayPage } from './enjoy-your-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnjoyYourDayPageRoutingModule
  ],
  declarations: [EnjoyYourDayPage]
})
export class EnjoyYourDayPageModule {}
