import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
// import {Push,PushToken } from '@ionic/cloud-angular';
import { ToastController } from 'ionic-angular';


import { PerfilPage } from '../perfil/perfil';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email;
  password;
  matricula;
  registro;
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
         this.registro = this.user.data.get('registro');
         console.log(this.user);
          console.log(this.matricula);
            console.log(this.registro);
         if(this.matricula == null){
           if(this.registro == true){
            this.navCtrl.push(TabsPage);
              }else{
                this.navCtrl.push(PerfilPage);
                  
              }

         }else{
              this.auth.logout();
              let toast = this.toastCtrl.create({
                message: 'el medico no puede entrar como paciente',
                duration: 3000
            });
            toast.present();
            }
          
      //   this.push.register().then((t: PushToken) => {
      //     console.log('reg push');
      //   return this.push.saveToken(t);
      // }).then((t: PushToken) => {
      //   console.log('Token saved:', t.token);
      // });
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
change(id){
		
		console.log(id);
		if(id == 'email'){
			console.log(this.email);
				if(this.email === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.email);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							console.log(this.email);
			}
		}
		if(id == 'password'){
			console.log(this.password);
				if(this.password === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.password);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							console.log(this.password);
			}
		}

}
}
