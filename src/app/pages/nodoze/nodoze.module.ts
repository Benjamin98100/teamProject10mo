import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NodozePageRoutingModule } from './nodoze-routing.module';

import { NodozePage } from './nodoze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NodozePageRoutingModule
  ],
  declarations: [NodozePage]
})
export class NodozePageModule {}
