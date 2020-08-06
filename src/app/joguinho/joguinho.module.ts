import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoguinhoPageRoutingModule } from './joguinho-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JoguinhoPage } from './joguinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoguinhoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [JoguinhoPage]
})
export class JoguinhoPageModule {}
