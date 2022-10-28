import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KenyPageRoutingModule } from './keny-routing.module';

import { KenyPage } from './keny.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KenyPageRoutingModule
  ],
  declarations: [KenyPage]
})
export class KenyPageModule {}
