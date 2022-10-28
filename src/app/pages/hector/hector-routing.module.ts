import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HectorPage } from './hector.page';

const routes: Routes = [
  {
    path: '',
    component: HectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HectorPageRoutingModule {}
