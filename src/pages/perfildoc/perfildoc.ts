import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { LoadingController } from 'ionic-angular';
import { ActionSheetController, Platform } from 'ionic-angular';

import { SelectPage } from '../select/select';

@IonicPage()
@Component({
  selector: 'page-perfildoc',
  templateUrl: 'perfildoc.html',
})
export class PerfildocPage {

 constructor(public platform: Platform, public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams, public auth: Auth,public user: User, public loadingCtrl: LoadingController) {
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfildoc');
  }
  salir(){
    console.log('salir');
    this.auth.logout();
    this.navCtrl.push(SelectPage);
  }

}
