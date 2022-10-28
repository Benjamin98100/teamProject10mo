import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HankPage } from './hank.page';

const routes: Routes = [
  {
    path: '',
    component: HankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HankPageRoutingModule {}
