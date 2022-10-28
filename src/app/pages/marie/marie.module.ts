import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MariePageRoutingModule } from './marie-routing.module';

import { MariePage } from './marie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MariePageRoutingModule
  ],
  declarations: [MariePage]
})
export class MariePageModule {}
