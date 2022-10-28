import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TortugaPage } from './tortuga.page';

const routes: Routes = [
  {
    path: '',
    component: TortugaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TortugaPageRoutingModule {}
