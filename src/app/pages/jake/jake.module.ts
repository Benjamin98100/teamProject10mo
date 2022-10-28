import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JakePageRoutingModule } from './jake-routing.module';

import { JakePage } from './jake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JakePageRoutingModule
  ],
  declarations: [JakePage]
})
export class JakePageModule {}
