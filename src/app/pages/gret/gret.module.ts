import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GretPageRoutingModule } from './gret-routing.module';

import { GretPage } from './gret.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GretPageRoutingModule
  ],
  declarations: [GretPage]
})
export class GretPageModule {}
