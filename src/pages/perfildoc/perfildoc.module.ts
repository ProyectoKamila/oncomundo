import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfildocPage } from './perfildoc';

@NgModule({
  declarations: [
    PerfildocPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfildocPage),
  ],
  exports: [
    PerfildocPage
  ]
})
export class PerfildocPageModule {}
