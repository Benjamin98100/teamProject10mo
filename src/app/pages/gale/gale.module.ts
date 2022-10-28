import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalePageRoutingModule } from './gale-routing.module';

import { GalePage } from './gale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalePageRoutingModule
  ],
  declarations: [GalePage]
})
export class GalePageModule {}
