import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KenyPage } from './keny.page';

const routes: Routes = [
  {
    path: '',
    component: KenyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KenyPageRoutingModule {}
