import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoguinhoPage } from './joguinho.page';

const routes: Routes = [
  {
    path: '',
    component: JoguinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoguinhoPageRoutingModule {}
