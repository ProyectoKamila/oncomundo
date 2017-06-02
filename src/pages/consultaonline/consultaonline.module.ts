import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaonlinePage } from './consultaonline';

@NgModule({
  declarations: [
    ConsultaonlinePage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaonlinePage),
  ],
  exports: [
    ConsultaonlinePage
  ]
})
export class ConsultaonlinePageModule {}
