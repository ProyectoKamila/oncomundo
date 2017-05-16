import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogindocPage } from './logindoc';

@NgModule({
  declarations: [
    LogindocPage,
  ],
  imports: [
    IonicPageModule.forChild(LogindocPage),
  ],
  exports: [
    LogindocPage
  ]
})
export class LogindocPageModule {}
