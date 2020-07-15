import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrusoPage } from './intruso.page';

const routes: Routes = [
  {
    path: '',
    component: IntrusoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrusoPageRoutingModule {}
