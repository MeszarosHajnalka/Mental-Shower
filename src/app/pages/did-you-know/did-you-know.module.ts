import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DidYouKnowPageRoutingModule } from './did-you-know-routing.module';

import { DidYouKnowPage } from './did-you-know.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DidYouKnowPageRoutingModule
  ],
  declarations: [DidYouKnowPage]
})
export class DidYouKnowPageModule {}
