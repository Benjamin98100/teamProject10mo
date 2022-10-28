import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LouisPage } from './louis.page';

const routes: Routes = [
  {
    path: '',
    component: LouisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LouisPageRoutingModule {}
