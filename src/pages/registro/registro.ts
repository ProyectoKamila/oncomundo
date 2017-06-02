import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import * as io  from 'socket.io-client';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
	dates = { email:'', password:'',nombre:'',apellido:'',telefono:'',password2:'',ci:''}
	socketHost: string = "https://adminbj-proyectokamila.c9users.io:8082";
  	socket:any;
	type = "p";
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public auth: Auth, public user: User,public toastCtrl: ToastController) {
	 this.socket = io.connect(this.socketHost);
      this.socket.emit('conf',{'project': 'oncomundo.com'});
	
 }
		
  ionViewDidLoad() {
    console.log('ionViewDidLoad Registro');
  }
  
  registrar(){
	 
	//   let loader = this.loadingCtrl.create({
	// 	  content: "Cargando..."
	//   });
	//   loader.present();
	 // console.log(this.dates);
		if(this.dates != null){	  
			  if(this.dates.email != undefined){
				
				  let details: UserDetails = { 'email': this.dates.email, 'password': this.dates.password ,'name': this.dates.nombre, 'custom':	{'documento': this.dates.ci,'telefono': this.dates.telefono,'apellido': this.dates.apellido,'password2': this.dates.password2 }	};
				
					if(this.dates.password == this.dates.password2){
							
							this.auth.signup(details ).then(() => {
								
								if(this.user.details == this.user.details){
									let data = {'insert' : {
									'user_login': this.type+this.dates.ci,
									'user_email':this.dates.email,
									'user_pass': this.dates.password,
									'user_nicename': this.dates.nombre,
								}
							};
						
							console.log(data);
							this.socket.emit('insert_user', data );
							this.socket.on('insert_user', (data) => {
								
								console.log('user akiiii');
								console.log(data);
								console.log(data.insertId);

								let meta = {'insert' : {
				
										'user_id': data.insertId,
										'meta_key':'first_name',
										'meta_value': this.dates.nombre
										
									}
								};
								let meta2 = {'insert' : {
				
										'user_id': data.insertId,
										'meta_key':'last_name',
										'meta_value': this.dates.apellido
										
									}
								};
								let meta3 = {'insert' : {
				
										'user_id': data.insertId,
										'meta_key':'nickname',
										'meta_value': this.dates.nombre
										
									}
								};
								let meta4 = {'insert' : {
				
										'user_id': data.insertId,
										'meta_key':'wp_capabilities',
										'meta_value': 'a:1:{s:8:"paciente";b:1;}'
										
									}
								};

								this.socket.emit('add_user_meta' , meta3 );
								this.socket.on('add_user_meta', (data) => {
									console.log('user meta akiiii');
									console.log(data);
									console.log(meta3);
									console.log(data.insertId);
								});
								this.socket.emit('add_user_meta' , meta );
								this.socket.on('add_user_meta', (data) => {
									console.log('user meta akiiii');
									console.log(data);
									console.log(meta);
									console.log(data.insertId);
								});
								this.socket.emit('add_user_meta' , meta2 );
								this.socket.on('add_user_meta', (data) => {
									console.log('user meta akiiii');
									console.log(data);
									console.log(meta2);
									console.log(data.insertId);
								});
								this.socket.emit('add_user_meta' , meta4 );
								this.socket.on('add_user_meta', (data) => {
									console.log('user meta akiiii');
									console.log(data);
									console.log(meta4);
									console.log(data.insertId);
								});
								

							});
								}
							
								// `this.user` is now 
								console.log(details);
								console.log(this.user.details);
								// this.user.set('usuario', 'this.dates.usuario');
								// this.user.save();
								this.navCtrl.push(LoginPage);
								//loader.dismiss();
								console.log('Registro Exitoso');
								let toast = this.toastCtrl.create({
											message: 'Registro Exitoso',
											duration: 3000
									});
									toast.present();
									//loader.dismiss();
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
		//loader.dismiss();
  }
change(id){
		
	//	console.log(id);
		if(id == 'name'){
			//console.log(this.dates.nombre);
				if(this.dates.nombre === ''){
						//console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						//console.log(this.dates.nombre);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							//console.log(this.dates.nombre);
			}
		}
		if(id == 'apellido'){
			//console.log(this.dates.apellido);
				if(this.dates.apellido === ''){
						//console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						//console.log(this.dates.apellido);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
						//	console.log(this.dates.apellido);
			}
		}
		if(id == 'telefono'){
			//console.log(this.dates.telefono);
				if(this.dates.telefono === ''){
						//console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						//console.log(this.dates.telefono);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
						//	console.log(this.dates.telefono);
			}
		}
		if(id == 'ci'){
			//console.log(this.dates.ci);
				if(this.dates.ci === ''){
						//console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						//console.log(this.dates.ci);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							//console.log(this.dates.ci);
			}
		}
		if(id == 'email'){
			//console.log(this.dates.email);
				if(this.dates.email === ''){
						//console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						//console.log(this.dates.email);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							//console.log(this.dates.email);
			}
		}
		if(id == 'password'){
			//console.log(this.dates.password);
				if(this.dates.password === ''){
						//console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						//console.log(this.dates.password);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							//console.log(this.dates.password);
			}
		}
		if(id == 'password2'){
			//console.log(this.dates.password2);
				if(this.dates.password2 === ''){
						//console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						//console.log(this.dates.password2);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							//console.log(this.dates.password2);
			}
		}
		
		
	}
	
}
