import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenhaperdidaPageRoutingModule } from './senhaperdida-routing.module';

import { SenhaperdidaPage } from './senhaperdida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenhaperdidaPageRoutingModule
  ],
  declarations: [SenhaperdidaPage]
})
export class SenhaperdidaPageModule {}
