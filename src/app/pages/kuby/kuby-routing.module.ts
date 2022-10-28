import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KubyPage } from './kuby.page';

const routes: Routes = [
  {
    path: '',
    component: KubyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KubyPageRoutingModule {}
