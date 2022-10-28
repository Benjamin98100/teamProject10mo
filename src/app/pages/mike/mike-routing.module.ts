import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MikePage } from './mike.page';

const routes: Routes = [
  {
    path: '',
    component: MikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MikePageRoutingModule {}
