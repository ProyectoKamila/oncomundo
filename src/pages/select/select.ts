import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { LogindocPage } from '../logindoc/logindoc';
import { RegistroPage } from '../registro/registro';
import { RegistrodocPage } from '../registrodoc/registrodoc';
import 'hammerjs';
import 'hammer-timejs';

/**
 * Generated class for the Select page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Select');
  }
  registro(){
        this.navCtrl.push(RegistroPage);
  }
    login(){
      this.navCtrl.push(LoginPage);
  }
    logindoc(){
      this.navCtrl.push(LogindocPage);
  }
   registrodoc(){
      this.navCtrl.push(RegistrodocPage);
  }
  press($event) {
    console.log('press');
  }
}
