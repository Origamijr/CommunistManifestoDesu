import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: 'home',
  loadChildren: '../modules/home/home.module#HomeModule'
}, {
  path: 'f',
  loadChildren: '../modules/farrago/farrago.module#FarragoModule'
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
