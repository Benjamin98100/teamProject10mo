import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HectorPageRoutingModule } from './hector-routing.module';

import { HectorPage } from './hector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HectorPageRoutingModule
  ],
  declarations: [HectorPage]
})
export class HectorPageModule {}
