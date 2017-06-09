import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { Camera } from 'ionic-native';
import { LoadingController } from 'ionic-angular';
import { ActionSheetController, Platform } from 'ionic-angular';

import { SelectPage } from '../select/select';
import { GpsPage } from '../gps/gps';

@IonicPage()
@Component({
  selector: 'page-perfildoc',
  templateUrl: 'perfildoc.html',
})
export class PerfildocPage {
  dates = { photo:'',horarios:'',pais:'',estado:''}
  public base64Image:string;
  registro : boolean;
  
 constructor(public platform: Platform, public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams, public auth: Auth,public user: User, public loadingCtrl: LoadingController,public toastCtrl: ToastController) {
 
  if (this.auth.isAuthenticated()) {
        
            console.log(this.user);
            this.registro = this.user.data.get('registro');
            console.log(this.registro);
            this.dates.horarios = this.user.get('horarios' , '');
            this.dates.pais = this.user.get('pais' , '');
            this.dates.estado = this.user.get('estado' , '');
            this.dates.photo = this.user.get('photo' , '');
            if(this.dates.photo == null){
              this.dates.photo = this.user.details.image
            }

            // this.img = this.user.details.image;
            
            
          }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfildoc');
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
           this.user.set('pais' , this.dates.pais);
           this.user.set('estado' , this.dates.estado);
           this.user.set('horarios' , this.dates.horarios);
            if(this.dates.horarios != null && this.dates.pais != null && this.dates.pais != null && this.dates.estado != null){
                  console.log('pasaste')
                  this.registro = true;
                  this.user.set('registro', this.registro);
                  this.user.save();      
                  // this.navCtrl.push(TabsPage);
                  console.log(this.registro)
            }else{
              let toast = this.toastCtrl.create({
                        message: 'Complete los campos faltantes',
                        duration: 3000
                    });
                    toast.present();
            }
           loader.dismiss();
           
            });
 
  }
  salir(){
    console.log('salir');
    this.auth.logout();
    this.navCtrl.push(SelectPage);
  }
  gps(){
    this.navCtrl.push(GpsPage);
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
				document.getElementById(id).style.background	 = "#45b19a";
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
				document.getElementById(id).style.background	 = "#45b19a";
							console.log(this.dates.estado);
			}
		}
		if(id == 'horarios'){
			console.log(this.dates.horarios);
				if(this.dates.horarios === ''){
						console.log('ashdksajhadkjshdkj');
					document.getElementById(id).style.background	 = "transparent";
						console.log(this.dates.horarios);
					
				}else{
				document.getElementById(id).style.background	 = "#45b19a";
							console.log(this.dates.horarios);
			}
		}
		
	}

}
