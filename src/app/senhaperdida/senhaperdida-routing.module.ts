import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhaperdidaPage } from './senhaperdida.page';
import { Router } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: SenhaperdidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenhaperdidaPageRoutingModule {}
