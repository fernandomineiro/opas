import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sala1/:sala',
    loadChildren: () => import('./sala1/sala1.module').then( m => m.Sala1PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'central',
    loadChildren: () => import('./central/central.module').then( m => m.CentralPageModule)
  },
  {
    path: 'senhaperdida',
    loadChildren: () => import('./senhaperdida/senhaperdida.module').then( m => m.SenhaperdidaPageModule)
  },
  {
    path: 'intruso',
    loadChildren: () => import('./intruso/intruso.module').then( m => m.IntrusoPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'trocarsenha',
    loadChildren: () => import('./trocarsenha/trocarsenha.module').then( m => m.TrocarsenhaPageModule)
  },
  {
    path: 'joguinho',
    loadChildren: () => import('./joguinho/joguinho.module').then( m => m.JoguinhoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
