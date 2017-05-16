
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { Camera } from 'ionic-native';
import { LoadingController } from 'ionic-angular';
import { ActionSheetController, Platform } from 'ionic-angular';

import { SelectPage } from '../select/select';
import { TabsPage } from './../tabs/tabs';


/**
 * Generated class for the Perfil page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  dates = { photo:'',pais:'', estado:'',sexo:'',edad:'',direccion:'',tipo:''}
  public base64Image:string;
  registro : boolean;

  constructor(public platform: Platform, public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams, public auth: Auth,public user: User, public loadingCtrl: LoadingController,public toastCtrl: ToastController) {
      

     if (this.auth.isAuthenticated()) {
          

            console.log(this.user);
            this.registro = this.user.data.get('registro');
            console.log(this.registro);
            this.dates.edad = this.user.get('edad' , '');
            this.dates.direccion = this.user.get('direccion' , '');
            this.dates.tipo = this.user.get('tipo' , '');
            this.dates.pais = this.user.get('pais' , '');
            this.dates.estado = this.user.get('estado' , '');
            this.dates.sexo = this.user.get('sexo' , '');
            this.dates.photo = this.user.get('photo' , '');
            if(this.dates.photo == null){
              this.dates.photo = this.user.details.image
            }

            // this.img = this.user.details.image;
            
            
          }
                    
          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil');
  }
  
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pefil',
      buttons: [
        {
          text: 'Camara',
          role: 'camara',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            Camera.getPicture({
              destinationType:Camera.DestinationType.DATA_URL,
              targetWidth: 1000,
              targetHeight: 1000,
            }).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
          this.dates.photo = this.base64Image;
          this.user.set('photo', this.base64Image);
            this.user.save();
            }, (err) => {
            console.log(err);
            });
  
            console.log('camara clicked');
          }
        },{
          text: 'Galeria',
          icon: !this.platform.is('ios') ? 'albums' : null,
          handler: () => {
            Camera.getPicture({
              destinationType : Camera.DestinationType.DATA_URL,
              sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
              targetWidth: 1000,
              targetHeight: 1000,
            }).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
          this.dates.photo = this.base64Image;
          this.user.set('photo', this.base64Image);
            this.user.save();
            }, (err) => {
            console.log(err);
            });
            console.log('galeria clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionperfil(){
    let loader = this.loadingCtrl.create({
		  content: "Espere"
    //   dismissOnPageChange: true
	  });
    console.log(this.dates);
    loader.present().then(() => {
           this.user.set('direccion', this.dates.direccion);
           this.user.set('edad' , this.dates.edad);
           this.user.set('tipo' , this.dates.tipo);
           this.user.set('pais' , this.dates.pais);
           this.user.set('estado' , this.dates.estado);
           this.user.set('sexo' , this.dates.sexo);
            if(this.dates.edad != null && this.dates.direccion != null && this.dates.tipo != null && this.dates.pais != null && this.dates.pais != null && this.dates.estado != null && this.dates.sexo != null){
                  console.log('pasaste')
                  this.registro = true;
                  this.user.set('registro', this.registro);
                  this.user.save();      
                  this.navCtrl.push(TabsPage);
                  console.log(this.registro)
            }else{
              let toast = this.toastCtrl.create({
                        message: 'Complete los demas campos',
                        duration: 3000
                    });
                    toast.present();
            }
           loader.dismiss();
           
            });
 
  }

  change(id){
		
		console.log(id);
		if(id == 'pais'){
			console.log(this.dates.pais);
				if(this.dates.pais === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.pais);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							console.log(this.dates.pais);
			}
		}
		if(id == 'estado'){
			console.log(this.dates.estado);
				if(this.dates.estado === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.estado);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							console.log(this.dates.estado);
			}
		}
		if(id == 'sexo'){
			console.log(this.dates.sexo);
				if(this.dates.sexo === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.sexo);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							console.log(this.dates.sexo);
			}
		}
		if(id == 'edad'){
			console.log(this.dates.edad);
				if(this.dates.edad === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.edad);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							console.log(this.dates.edad);
			}
		}
		if(id == 'direccion'){
			console.log(this.dates.direccion);
				if(this.dates.direccion === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.direccion);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							console.log(this.dates.direccion);
			}
		}
		if(id == 'password'){
			console.log(this.dates.tipo);
				if(this.dates.tipo === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.tipo);
					
				}else{
				document.getElementById(id).style.background	 = "#ecd4d0";
							console.log(this.dates.tipo);
			}
		}
		
	}

}
