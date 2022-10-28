import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonaldPage } from './donald.page';

const routes: Routes = [
  {
    path: '',
    component: DonaldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonaldPageRoutingModule {}
