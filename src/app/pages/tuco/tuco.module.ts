import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TucoPageRoutingModule } from './tuco-routing.module';

import { TucoPage } from './tuco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TucoPageRoutingModule
  ],
  declarations: [TucoPage]
})
export class TucoPageModule {}
