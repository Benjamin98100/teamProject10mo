import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TortugaPageRoutingModule } from './tortuga-routing.module';

import { TortugaPage } from './tortuga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TortugaPageRoutingModule
  ],
  declarations: [TortugaPage]
})
export class TortugaPageModule {}
