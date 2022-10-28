import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WjrPageRoutingModule } from './wjr-routing.module';

import { WjrPage } from './wjr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WjrPageRoutingModule
  ],
  declarations: [WjrPage]
})
export class WjrPageModule {}
