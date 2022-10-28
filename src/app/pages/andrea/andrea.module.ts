import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndreaPageRoutingModule } from './andrea-routing.module';

import { AndreaPage } from './andrea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndreaPageRoutingModule
  ],
  declarations: [AndreaPage]
})
export class AndreaPageModule {}
