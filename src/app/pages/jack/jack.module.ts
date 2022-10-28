import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JackPageRoutingModule } from './jack-routing.module';

import { JackPage } from './jack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JackPageRoutingModule
  ],
  declarations: [JackPage]
})
export class JackPageModule {}
