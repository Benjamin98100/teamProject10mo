import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodozePage } from './nodoze.page';

const routes: Routes = [
  {
    path: '',
    component: NodozePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NodozePageRoutingModule {}
