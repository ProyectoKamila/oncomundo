import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
//import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { LogindocPage } from '../logindoc/logindoc';

/**
 * Generated class for the Registrodoc page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registrodoc',
  templateUrl: 'registrodoc.html',
})
export class RegistrodocPage {
  dates = { email:'', password:'',nombre:'',apellido:'',matricula:'',password2:'',ci:''}

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth: Auth, public user: User,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registrodoc');
  }
  registrar(){
	  // let loader = this.loadingCtrl.create({
		//   content: "Espere"
	  // });
	  // loader.present();
	 // console.log(this.dates);
		if(this.dates != null){	  
			  if(this.dates.email != undefined){
				
				  let details: UserDetails = { 'email': this.dates.email, 'password': this.dates.password ,'name': this.dates.nombre, 'custom':	{'documento': this.dates.ci,'matricula': this.dates.matricula,'apellido': this.dates.apellido,'password2': this.dates.password2 }	};
				
					if(this.dates.password == this.dates.password2){
						
							this.auth.signup(details ).then(() => {
								// `this.user` is now 
								console.log(details);
								console.log(this.user.details);
								// this.user.set('usuario', 'this.dates.usuario');
								// this.user.save();
							  this.navCtrl.push(LogindocPage);
								//loader.dismiss();
								console.log('Registro Exitoso');
								let toast = this.toastCtrl.create({
											message: 'Registro Exitoso',
											duration: 3000
									});
									toast.present();
							}, (err: IDetailedError<string[]>) => {
								for (let e of err.details) {
									if (e === 'conflict_email') {
											console.log('Este Email Esta Registrado');
										let toast = this.toastCtrl.create({
											message: 'Este Email Esta Registrado',
											duration: 3000
									});
								toast.present();
										
									} else {
										// handle other errors
											console.log('Verifique sus datos');
											let toast = this.toastCtrl.create({
												message: 'Verifique sus datos',
												duration: 3000
										});
										toast.present();
									
									}
								}
							});
						}else{
	console.log('Contrasena incorrecta');
						let toast = this.toastCtrl.create({
												message: 'Contrasena incorrecta',
												duration: 3000
										});
										toast.present();
						}
					
			  }
		}
  }
	change(id){
		
		console.log(id);
		if(id == 'name'){
			console.log(this.dates.nombre);
				if(this.dates.nombre === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.nombre);
					
				}else{
				document.getElementById(id).style.background	 = "#45b19a";
							console.log(this.dates.nombre);
			}
		}
		if(id == 'apellido'){
			console.log(this.dates.apellido);
				if(this.dates.apellido === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.apellido);
					
				}else{
				document.getElementById(id).style.background	 = "#45b19a";
							console.log(this.dates.apellido);
			}
		}
		if(id == 'matricula'){
			console.log(this.dates.matricula);
				if(this.dates.matricula === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.matricula);
					
				}else{
				document.getElementById(id).style.background	 = "#45b19a";
							console.log(this.dates.matricula);
			}
		}
		if(id == 'ci'){
			console.log(this.dates.ci);
				if(this.dates.ci === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.ci);
					
				}else{
				document.getElementById(id).style.background	 = "#45b19a";
							console.log(this.dates.ci);
			}
		}
		if(id == 'email'){
			console.log(this.dates.email);
				if(this.dates.email === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.email);
					
				}else{
				document.getElementById(id).style.background	 = "#45b19a";
							console.log(this.dates.email);
			}
		}
		if(id == 'password'){
			console.log(this.dates.password);
				if(this.dates.password === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.password);
					
				}else{
				document.getElementById(id).style.background	 = "#45b19a";
							console.log(this.dates.password);
			}
		}
		if(id == 'password2'){
			console.log(this.dates.password2);
				if(this.dates.password2 === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.password2);
					
				}else{
				document.getElementById(id).style.background	 = "#45b19a";
							console.log(this.dates.password2);
			}
		}
		
		
	}
}
