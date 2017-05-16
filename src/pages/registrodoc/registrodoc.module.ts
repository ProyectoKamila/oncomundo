import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrodocPage } from './registrodoc';

@NgModule({
  declarations: [
    RegistrodocPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrodocPage),
  ],
  exports: [
    RegistrodocPage
  ]
})
export class RegistrodocPageModule {}
