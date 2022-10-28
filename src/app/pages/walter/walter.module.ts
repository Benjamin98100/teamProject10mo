import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalterPageRoutingModule } from './walter-routing.module';

import { WalterPage } from './walter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalterPageRoutingModule
  ],
  declarations: [WalterPage]
})
export class WalterPageModule {}
