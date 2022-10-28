import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VictorPageRoutingModule } from './victor-routing.module';

import { VictorPage } from './victor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VictorPageRoutingModule
  ],
  declarations: [VictorPage]
})
export class VictorPageModule {}
