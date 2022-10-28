import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrancesscaPageRoutingModule } from './francessca-routing.module';

import { FrancesscaPage } from './francessca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrancesscaPageRoutingModule
  ],
  declarations: [FrancesscaPage]
})
export class FrancesscaPageModule {}
