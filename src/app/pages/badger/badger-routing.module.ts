import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgerPage } from './badger.page';

const routes: Routes = [
  {
    path: '',
    component: BadgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgerPageRoutingModule {}
