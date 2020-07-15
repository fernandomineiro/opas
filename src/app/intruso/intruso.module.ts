import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrusoPageRoutingModule } from './intruso-routing.module';

import { IntrusoPage } from './intruso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrusoPageRoutingModule
  ],
  declarations: [IntrusoPage]
})
export class IntrusoPageModule {}
