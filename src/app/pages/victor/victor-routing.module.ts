import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VictorPage } from './victor.page';

const routes: Routes = [
  {
    path: '',
    component: VictorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VictorPageRoutingModule {}
