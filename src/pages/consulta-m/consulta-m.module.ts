import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaMPage } from './consulta-m';

@NgModule({
  declarations: [
    ConsultaMPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaMPage),
  ],
  exports: [
    ConsultaMPage
  ]
})
export class ConsultaMPageModule {}
