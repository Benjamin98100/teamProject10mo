import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuellPageRoutingModule } from './huell-routing.module';

import { HuellPage } from './huell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuellPageRoutingModule
  ],
  declarations: [HuellPage]
})
export class HuellPageModule {}
