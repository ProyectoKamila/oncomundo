import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { FormsModule } from '@angular/forms';

import 'hammerjs';
import 'hammer-timejs';

import { MyApp } from './app.component';
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
import { ModalpendientesPage } from '../pages/modalpendientes/modalpendientes';
import { ConsultaMPage } from '../pages/consulta-m/consulta-m';
import { ConsultaonlinePage } from '../pages/consultaonline/consultaonline';
import { ConsultaMPerfilPage } from '../pages/consulta-m-perfil/consulta-m-perfil';




const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '489b779e'
  },
  // 'push': {
  //   'sender_id': '',
  //   'pluginConfig': {
  //     'ios': {
  //       'badge': true,
  //       'sound': true
  //     },
  //     'android': {
  //       'iconColor': '#343434'
  //     }
  //   }
  // }
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LogindocPage,
    RegistroPage,
    PerfilPage,
    SelectPage,
    RegistrodocPage,
    PerfildocPage,
    ConsultasPage,
    OncochatPage,
    PendientesPage,
    TabsPage,
    ModalpendientesPage,
    ConsultaMPage,
    ConsultaonlinePage,
    ConsultaMPerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        backButtonText: ' ',

  }),
     CloudModule.forRoot(cloudSettings),
     FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LogindocPage,
    RegistroPage,
    PerfilPage,
    SelectPage,
    RegistrodocPage,
    PerfildocPage,
    ConsultasPage,
    OncochatPage,
    PendientesPage,
    TabsPage,
    ModalpendientesPage,
    ConsultaMPage,
    ConsultaonlinePage,
    ConsultaMPerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
