import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OncochatPage } from './oncochat';

@NgModule({
  declarations: [
    OncochatPage,
  ],
  imports: [
    IonicPageModule.forChild(OncochatPage),
  ],
  exports: [
    OncochatPage
  ]
})
export class OncochatPageModule {}
