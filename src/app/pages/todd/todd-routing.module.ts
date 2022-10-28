import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToddPage } from './todd.page';

const routes: Routes = [
  {
    path: '',
    component: ToddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToddPageRoutingModule {}
