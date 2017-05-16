import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth, User } from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogindocPage } from '../pages/logindoc/logindoc';
import { RegistroPage } from '../pages/registro/registro';
import { PerfilPage } from '../pages/perfil/perfil';
import { SelectPage } from '../pages/select/select';
import { RegistrodocPage } from '../pages/registrodoc/registrodoc';
import { PerfildocPage } from '../pages/perfildoc/perfildoc';
import { ConsultasPage } from '../pages/consultas/consultas';
import { OncochatPage } from '../pages/oncochat/oncochat';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  matricula;
  registro;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public auth: Auth, public user: User) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if (this.auth.isAuthenticated()) {

        this.matricula = this.user.data.get('matricula');
        this.registro = this.user.data.get('registro');
            if(this.matricula == null){
              if(this.registro == true){
                this.rootPage = TabsPage;
              }else{

                this.rootPage = PerfilPage;
              }

            }else{
                this.rootPage = PerfildocPage;              
                }
            // this.user is authenticated!
            console.log(this.user.id);
      }else{
        this.rootPage = HomePage;
      }
    });
  }
}

