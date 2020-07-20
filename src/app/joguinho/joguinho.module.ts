import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoguinhoPageRoutingModule } from './joguinho-routing.module';

import { JoguinhoPage } from './joguinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoguinhoPageRoutingModule
  ],
  declarations: [JoguinhoPage]
})
export class JoguinhoPageModule {}
