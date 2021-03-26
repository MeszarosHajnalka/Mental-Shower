import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowDoYouFeelPageRoutingModule } from './how-do-you-feel-routing.module';

import { HowDoYouFeelPage } from './how-do-you-feel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowDoYouFeelPageRoutingModule
  ],
  declarations: [HowDoYouFeelPage]
})
export class HowDoYouFeelPageModule {}
