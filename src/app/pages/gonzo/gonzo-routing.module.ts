import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GonzoPage } from './gonzo.page';

const routes: Routes = [
  {
    path: '',
    component: GonzoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GonzoPageRoutingModule {}
