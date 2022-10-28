import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MikePageRoutingModule } from './mike-routing.module';

import { MikePage } from './mike.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MikePageRoutingModule
  ],
  declarations: [MikePage]
})
export class MikePageModule {}
