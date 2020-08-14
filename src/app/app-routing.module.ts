import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CentralPageModule } from './central/central.module'
import { HomePageModule } from './home/home.module'
import { Sala1PageModule } from './sala1/sala1.module'
import { LoginPageModule } from './login/login.module'
import { RegistroPageModule } from './registro/registro.module'
import { SenhaperdidaPageModule } from './senhaperdida/senhaperdida.module'
import { ConfiguracaoPageModule } from './configuracao/configuracao.module'
import { TrocarsenhaPageModule } from './trocarsenha/trocarsenha.module'
import { JoguinhoPageModule } from './joguinho/joguinho.module'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => HomePageModule
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sala1/:sala',
    loadChildren: () => Sala1PageModule
  },
  {
    path: 'login',
    loadChildren: () => LoginPageModule
  },
  {
    path: 'registro',
    loadChildren: () => RegistroPageModule
  },
  {
    path: 'central',
    loadChildren: () => CentralPageModule
  },
  {
    path: 'senhaperdida',
    loadChildren: () => SenhaperdidaPageModule
  },
  {
    path: 'configuracao',
    loadChildren: () => ConfiguracaoPageModule
  },
  {
    path: 'trocarsenha',
    loadChildren: () => TrocarsenhaPageModule
  },
  {
    path: 'joguinho',
    loadChildren: () => JoguinhoPageModule
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
