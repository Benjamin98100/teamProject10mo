import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EladioPage } from './eladio.page';

const routes: Routes = [
  {
    path: '',
    component: EladioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EladioPageRoutingModule {}
