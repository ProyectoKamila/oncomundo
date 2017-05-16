import { SelectPage } from './../select/select';
import { OncochatPage } from './../oncochat/oncochat';
import { PendientesPage } from './../pendientes/pendientes';
import { ConsultasPage } from './../consultas/consultas';
import { PerfilPage } from './../perfil/perfil';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1=ConsultasPage
  tab2=PendientesPage
  tab3=OncochatPage
  tab4=PerfilPage
  correo;
  nombre;
  img;
  mySelectedIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth: Auth,public user: User,public menuCtrl: MenuController) {
     this.mySelectedIndex = navParams.data.tabIndex || 0;
     if (this.auth.isAuthenticated()) {
            this.nombre = this.user.details.name;
            this.correo = this.user.details.email;
            this.img = this.user.get('photo' , '');
            if(this.img == null){
              this.img = this.user.details.image
            }
            
          }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }
  salir(){
    console.log('salir');
    this.menuCtrl.enable(false);
    this.auth.logout();
    this.navCtrl.push(SelectPage);
  }
  

}
