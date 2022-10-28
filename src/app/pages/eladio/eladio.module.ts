import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EladioPageRoutingModule } from './eladio-routing.module';

import { EladioPage } from './eladio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EladioPageRoutingModule
  ],
  declarations: [EladioPage]
})
export class EladioPageModule {}
