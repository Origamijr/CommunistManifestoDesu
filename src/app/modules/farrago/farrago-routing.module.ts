import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarragoComponent } from './farrago.component';
import { TheActualCommunistManifestoComponent } from './the-actual-communist-manifesto/the-actual-communist-manifesto.component';

const routes: Routes = [{
  path: '',
  component: FarragoComponent,
  children: [{
    path: '',
    redirectTo: 'communist-manifesto',
    pathMatch: 'full'
  },{
    path: 'communist-manifesto',
    component: TheActualCommunistManifestoComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarragoRoutingModule { }
