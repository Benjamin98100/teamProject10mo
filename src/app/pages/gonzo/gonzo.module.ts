import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GonzoPageRoutingModule } from './gonzo-routing.module';

import { GonzoPage } from './gonzo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GonzoPageRoutingModule
  ],
  declarations: [GonzoPage]
})
export class GonzoPageModule {}
