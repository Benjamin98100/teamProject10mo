import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KubyPageRoutingModule } from './kuby-routing.module';

import { KubyPage } from './kuby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KubyPageRoutingModule
  ],
  declarations: [KubyPage]
})
export class KubyPageModule {}
