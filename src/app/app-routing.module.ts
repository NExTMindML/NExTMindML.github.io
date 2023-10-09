import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  {path: 'repository', loadChildren: () => import('./repository/repository.module').then(m => m.RepositoryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled', scrollOffset: [0, 64]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
