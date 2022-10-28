import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonaldPageRoutingModule } from './donald-routing.module';

import { DonaldPage } from './donald.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonaldPageRoutingModule
  ],
  declarations: [DonaldPage]
})
export class DonaldPageModule {}
