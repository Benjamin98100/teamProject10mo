import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WjrPage } from './wjr.page';

const routes: Routes = [
  {
    path: '',
    component: WjrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WjrPageRoutingModule {}
