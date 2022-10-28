import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuellPage } from './huell.page';

const routes: Routes = [
  {
    path: '',
    component: HuellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuellPageRoutingModule {}
