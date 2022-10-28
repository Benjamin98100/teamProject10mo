import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavePage } from './dave.page';

const routes: Routes = [
  {
    path: '',
    component: DavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavePageRoutingModule {}
