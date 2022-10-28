import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaffPageRoutingModule } from './gaff-routing.module';

import { GaffPage } from './gaff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaffPageRoutingModule
  ],
  declarations: [GaffPage]
})
export class GaffPageModule {}
