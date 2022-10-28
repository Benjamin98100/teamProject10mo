import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TyruxPageRoutingModule } from './tyrux-routing.module';

import { TyruxPage } from './tyrux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TyruxPageRoutingModule
  ],
  declarations: [TyruxPage]
})
export class TyruxPageModule {}
