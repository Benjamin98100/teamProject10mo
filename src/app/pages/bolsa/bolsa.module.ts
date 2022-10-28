import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolsaPageRoutingModule } from './bolsa-routing.module';

import { BolsaPage } from './bolsa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolsaPageRoutingModule
  ],
  declarations: [BolsaPage]
})
export class BolsaPageModule {}
