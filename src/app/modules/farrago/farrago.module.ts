import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarragoRoutingModule } from './farrago-routing.module';
import { TheActualCommunistManifestoComponent } from './the-actual-communist-manifesto/the-actual-communist-manifesto.component';
import { FarragoComponent } from './farrago.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FarragoRoutingModule,
    SharedModule
  ],
  declarations: [TheActualCommunistManifestoComponent, FarragoComponent]
})
export class FarragoModule { }
