import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LouisPageRoutingModule } from './louis-routing.module';

import { LouisPage } from './louis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LouisPageRoutingModule
  ],
  declarations: [LouisPage]
})
export class LouisPageModule {}
