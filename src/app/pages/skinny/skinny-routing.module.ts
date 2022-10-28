import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinnyPage } from './skinny.page';

const routes: Routes = [
  {
    path: '',
    component: SkinnyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinnyPageRoutingModule {}
