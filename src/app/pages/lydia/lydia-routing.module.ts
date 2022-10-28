import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LydiaPage } from './lydia.page';

const routes: Routes = [
  {
    path: '',
    component: LydiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LydiaPageRoutingModule {}
