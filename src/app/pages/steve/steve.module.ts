import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StevePageRoutingModule } from './steve-routing.module';

import { StevePage } from './steve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StevePageRoutingModule
  ],
  declarations: [StevePage]
})
export class StevePageModule {}
