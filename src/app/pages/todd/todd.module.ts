import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToddPageRoutingModule } from './todd-routing.module';

import { ToddPage } from './todd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToddPageRoutingModule
  ],
  declarations: [ToddPage]
})
export class ToddPageModule {}
