import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JessiPageRoutingModule } from './jessi-routing.module';

import { JessiPage } from './jessi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JessiPageRoutingModule
  ],
  declarations: [JessiPage]
})
export class JessiPageModule {}
