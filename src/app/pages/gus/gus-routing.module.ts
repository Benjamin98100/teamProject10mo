import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GusPage } from './gus.page';

const routes: Routes = [
  {
    path: '',
    component: GusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GusPageRoutingModule {}
