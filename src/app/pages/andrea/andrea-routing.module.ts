import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndreaPage } from './andrea.page';

const routes: Routes = [
  {
    path: '',
    component: AndreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndreaPageRoutingModule {}
