import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalpendientesPage } from './modalpendientes';

@NgModule({
  declarations: [
    ModalpendientesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalpendientesPage),
  ],
  exports: [
    ModalpendientesPage
  ]
})
export class ModalpendientesPageModule {}
