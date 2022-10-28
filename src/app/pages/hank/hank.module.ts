import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HankPageRoutingModule } from './hank-routing.module';

import { HankPage } from './hank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HankPageRoutingModule
  ],
  declarations: [HankPage]
})
export class HankPageModule {}
