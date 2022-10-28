import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavePageRoutingModule } from './dave-routing.module';

import { DavePage } from './dave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavePageRoutingModule
  ],
  declarations: [DavePage]
})
export class DavePageModule {}
