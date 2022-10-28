import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CristianPageRoutingModule } from './cristian-routing.module';

import { CristianPage } from './cristian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CristianPageRoutingModule
  ],
  declarations: [CristianPage]
})
export class CristianPageModule {}
