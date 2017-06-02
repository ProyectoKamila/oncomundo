import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaMPerfilPage } from './consulta-m-perfil';

@NgModule({
  declarations: [
    ConsultaMPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaMPerfilPage),
  ],
  exports: [
    ConsultaMPerfilPage
  ]
})
export class ConsultaMPerfilPageModule {}
