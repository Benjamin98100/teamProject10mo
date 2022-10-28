import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StevePage } from './steve.page';

const routes: Routes = [
  {
    path: '',
    component: StevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StevePageRoutingModule {}
