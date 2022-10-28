import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgerPageRoutingModule } from './badger-routing.module';

import { BadgerPage } from './badger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgerPageRoutingModule
  ],
  declarations: [BadgerPage]
})
export class BadgerPageModule {}
