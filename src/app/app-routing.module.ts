import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'walter',
    loadChildren: () => import('./pages/walter/walter.module').then( m => m.WalterPageModule)
  },
  {
    path: 'jessi',
    loadChildren: () => import('./pages/jessi/jessi.module').then( m => m.JessiPageModule)
  },
  {
    path: 'skiller',
    loadChildren: () => import('./pages/skiller/skiller.module').then( m => m.SkillerPageModule)
  },
  {
    path: 'gus',
    loadChildren: () => import('./pages/gus/gus.module').then( m => m.GusPageModule)
  },
  {
    path: 'jane',
    loadChildren: () => import('./pages/jane/jane.module').then( m => m.JanePageModule)
  },
  {
    path: 'saul',
    loadChildren: () => import('./pages/saul/saul.module').then( m => m.SaulPageModule)
  },
  {
    path: 'mike',
    loadChildren: () => import('./pages/mike/mike.module').then( m => m.MikePageModule)
  },
  {
    path: 'hank',
    loadChildren: () => import('./pages/hank/hank.module').then( m => m.HankPageModule)
  },
  {
    path: 'wjr',
    loadChildren: () => import('./pages/wjr/wjr.module').then( m => m.WjrPageModule)
  },
  {
    path: 'todd',
    loadChildren: () => import('./pages/todd/todd.module').then( m => m.ToddPageModule)
  },
  {
    path: 'lydia',
    loadChildren: () => import('./pages/lydia/lydia.module').then( m => m.LydiaPageModule)
  },
  {
    path: 'tuco',
    loadChildren: () => import('./pages/tuco/tuco.module').then( m => m.TucoPageModule)
  },
  {
    path: 'hector',
    loadChildren: () => import('./pages/hector/hector.module').then( m => m.HectorPageModule)
  },
  {
    path: 'ted',
    loadChildren: () => import('./pages/ted/ted.module').then( m => m.TedPageModule)
  },
  {
    path: 'badger',
    loadChildren: () => import('./pages/badger/badger.module').then( m => m.BadgerPageModule)
  },
  {
    path: 'gale',
    loadChildren: () => import('./pages/gale/gale.module').then( m => m.GalePageModule)
  },
  {
    path: 'marie',
    loadChildren: () => import('./pages/marie/marie.module').then( m => m.MariePageModule)
  },
  {
    path: 'jack',
    loadChildren: () => import('./pages/jack/jack.module').then( m => m.JackPageModule)
  },
  {
    path: 'kuby',
    loadChildren: () => import('./pages/kuby/kuby.module').then( m => m.KubyPageModule)
  },
  {
    path: 'gret',
    loadChildren: () => import('./pages/gret/gret.module').then( m => m.GretPageModule)
  },
  {
    path: 'skinny',
    loadChildren: () => import('./pages/skinny/skinny.module').then( m => m.SkinnyPageModule)
  },
  {
    path: 'cristian',
    loadChildren: () => import('./pages/cristian/cristian.module').then( m => m.CristianPageModule)
  },
  {
    path: 'andrea',
    loadChildren: () => import('./pages/andrea/andrea.module').then( m => m.AndreaPageModule)
  },
  {
    path: 'huell',
    loadChildren: () => import('./pages/huell/huell.module').then( m => m.HuellPageModule)
  },
  {
    path: 'eladio',
    loadChildren: () => import('./pages/eladio/eladio.module').then( m => m.EladioPageModule)
  },
  {
    path: 'steve',
    loadChildren: () => import('./pages/steve/steve.module').then( m => m.StevePageModule)
  },
  {
    path: 'tortuga',
    loadChildren: () => import('./pages/tortuga/tortuga.module').then( m => m.TortugaPageModule)
  },
  {
    path: 'tyrux',
    loadChildren: () => import('./pages/tyrux/tyrux.module').then( m => m.TyruxPageModule)
  },
  {
    path: 'marco',
    loadChildren: () => import('./pages/marco/marco.module').then( m => m.MarcoPageModule)
  },
  {
    path: 'bolsa',
    loadChildren: () => import('./pages/bolsa/bolsa.module').then( m => m.BolsaPageModule)
  },
  {
    path: 'nodoze',
    loadChildren: () => import('./pages/nodoze/nodoze.module').then( m => m.NodozePageModule)
  },
  {
    path: 'donald',
    loadChildren: () => import('./pages/donald/donald.module').then( m => m.DonaldPageModule)
  },
  {
    path: 'jake',
    loadChildren: () => import('./pages/jake/jake.module').then( m => m.JakePageModule)
  },
  {
    path: 'francessca',
    loadChildren: () => import('./pages/francessca/francessca.module').then( m => m.FrancesscaPageModule)
  },
  {
    path: 'gonzo',
    loadChildren: () => import('./pages/gonzo/gonzo.module').then( m => m.GonzoPageModule)
  },
  {
    path: 'gaff',
    loadChildren: () => import('./pages/gaff/gaff.module').then( m => m.GaffPageModule)
  },
  {
    path: 'clovis',
    loadChildren: () => import('./pages/clovis/clovis.module').then( m => m.ClovisPageModule)
  },
  {
    path: 'dave',
    loadChildren: () => import('./pages/dave/dave.module').then( m => m.DavePageModule)
  },
  {
    path: 'keny',
    loadChildren: () => import('./pages/keny/keny.module').then( m => m.KenyPageModule)
  },
  {
    path: 'victor',
    loadChildren: () => import('./pages/victor/victor.module').then( m => m.VictorPageModule)
  },
  {
    path: 'louis',
    loadChildren: () => import('./pages/louis/louis.module').then( m => m.LouisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
