import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sala1Page } from './sala1.page';

const routes: Routes = [
  {
    path: '',
    component: Sala1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sala1PageRoutingModule {}
