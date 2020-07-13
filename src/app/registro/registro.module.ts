import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { NgxMaskModule, IConfig } from 'ngx-mask'
export var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    NgxMaskModule.forRoot(options)
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
