import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaulPage } from './saul.page';

const routes: Routes = [
  {
    path: '',
    component: SaulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaulPageRoutingModule {}
