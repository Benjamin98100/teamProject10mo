import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClovisPageRoutingModule } from './clovis-routing.module';

import { ClovisPage } from './clovis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClovisPageRoutingModule
  ],
  declarations: [ClovisPage]
})
export class ClovisPageModule {}
