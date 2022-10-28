import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JackPage } from './jack.page';

const routes: Routes = [
  {
    path: '',
    component: JackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JackPageRoutingModule {}
