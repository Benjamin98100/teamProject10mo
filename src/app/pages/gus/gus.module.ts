import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GusPageRoutingModule } from './gus-routing.module';

import { GusPage } from './gus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GusPageRoutingModule
  ],
  declarations: [GusPage]
})
export class GusPageModule {}
