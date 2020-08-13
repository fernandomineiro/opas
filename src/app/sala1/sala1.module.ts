import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Sala1PageRoutingModule } from './sala1-routing.module';
import { Sala1Page } from './sala1.page';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    Sala1PageRoutingModule,
    HttpClientModule,
  ],
  declarations: [Sala1Page]
})
export class Sala1PageModule {}
