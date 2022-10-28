import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GretPage } from './gret.page';

const routes: Routes = [
  {
    path: '',
    component: GretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GretPageRoutingModule {}
