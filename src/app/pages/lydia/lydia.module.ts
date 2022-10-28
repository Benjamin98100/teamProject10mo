import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LydiaPageRoutingModule } from './lydia-routing.module';

import { LydiaPage } from './lydia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LydiaPageRoutingModule
  ],
  declarations: [LydiaPage]
})
export class LydiaPageModule {}
