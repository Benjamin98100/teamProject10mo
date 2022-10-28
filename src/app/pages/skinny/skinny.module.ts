import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinnyPageRoutingModule } from './skinny-routing.module';

import { SkinnyPage } from './skinny.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinnyPageRoutingModule
  ],
  declarations: [SkinnyPage]
})
export class SkinnyPageModule {}
