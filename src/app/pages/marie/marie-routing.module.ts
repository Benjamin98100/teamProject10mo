import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MariePage } from './marie.page';

const routes: Routes = [
  {
    path: '',
    component: MariePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MariePageRoutingModule {}
