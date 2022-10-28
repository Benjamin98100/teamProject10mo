import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillerPageRoutingModule } from './skiller-routing.module';

import { SkillerPage } from './skiller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillerPageRoutingModule
  ],
  declarations: [SkillerPage]
})
export class SkillerPageModule {}
