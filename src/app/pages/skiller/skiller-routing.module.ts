import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillerPage } from './skiller.page';

const routes: Routes = [
  {
    path: '',
    component: SkillerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillerPageRoutingModule {}
