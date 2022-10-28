import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrancesscaPage } from './francessca.page';

const routes: Routes = [
  {
    path: '',
    component: FrancesscaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrancesscaPageRoutingModule {}
