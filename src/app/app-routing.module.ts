import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'property/:id',
    loadChildren: () => import('./property/property.module').then( m => m.PropertyPageModule)
  },
  {
    path: 'visitor/:id',
    loadChildren: () => import('./visitor/visitor.module').then( m => m.VisitorPageModule)
  },
  {
    path: 'visitor-add',
    loadChildren: () => import('./visitor-add/visitor-add.module').then( m => m.VisitorAddPageModule)
  },
  {
    path: 'visitor-edit/:id',
    loadChildren: () => import('./visitor-edit/visitor-edit.module').then( m => m.VisitorEditPageModule)
  },
  {
    path: 'visitors',
    loadChildren: () => import('./visitors/visitors.module').then( m => m.VisitorsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
