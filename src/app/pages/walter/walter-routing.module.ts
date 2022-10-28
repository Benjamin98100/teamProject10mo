import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalterPage } from './walter.page';

const routes: Routes = [
  {
    path: '',
    component: WalterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalterPageRoutingModule {}
