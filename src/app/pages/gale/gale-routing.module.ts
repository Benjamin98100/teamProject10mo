import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalePage } from './gale.page';

const routes: Routes = [
  {
    path: '',
    component: GalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalePageRoutingModule {}
