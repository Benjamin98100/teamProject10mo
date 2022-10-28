import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaulPageRoutingModule } from './saul-routing.module';

import { SaulPage } from './saul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaulPageRoutingModule
  ],
  declarations: [SaulPage]
})
export class SaulPageModule {}
