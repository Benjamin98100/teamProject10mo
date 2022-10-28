import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TucoPage } from './tuco.page';

const routes: Routes = [
  {
    path: '',
    component: TucoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TucoPageRoutingModule {}
