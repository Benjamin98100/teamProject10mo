import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JessiPage } from './jessi.page';

const routes: Routes = [
  {
    path: '',
    component: JessiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JessiPageRoutingModule {}
