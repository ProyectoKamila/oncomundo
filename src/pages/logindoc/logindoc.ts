import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
// import {Push,PushToken } from '@ionic/cloud-angular';
import { ToastController } from 'ionic-angular';

import { PerfildocPage } from '../perfildoc/perfildoc';

@IonicPage()
@Component({
  selector: 'page-logindoc',
  templateUrl: 'logindoc.html',
})
export class LogindocPage {
  email;
  password;
  matricula;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth: Auth, public user: User, public toastCtrl: ToastController) {
  }
  // public push: Push
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  contrasena(){
      this.navCtrl.push("");
}
   perfil(){
     console.log('Perfil');
     console.log(this.email);
       console.log(this.password);
     if(this.email != undefined ||  this.password != undefined){
       let details = { 'email': this.email, 'password': this.password};
       
       this.auth.login('basic' , details).then(() => {

      this.matricula = this.user.data.get('matricula');

         console.log(this.user);
          console.log(this.matricula);

         if(this.matricula != null){
            this.navCtrl.push(PerfildocPage);

         }else{
              this.auth.logout();
              let toast = this.toastCtrl.create({
                message: 'el paciente no puede entrar como medico',
                duration: 3000
            });
            toast.present();
            }
       }, (err) => {
           console.log('error  ');
             console.log(err);
              let toast = this.toastCtrl.create({
                message: 'Su email o Password son incorrectos',
                duration: 3000
            });
            toast.present();
          });
     }else {
      let toast = this.toastCtrl.create({
        message: 'Verifique sus datos',
        duration: 3000
    });
    toast.present();
     }
    // this.navCtrl.push(Dashboard);
}

}
