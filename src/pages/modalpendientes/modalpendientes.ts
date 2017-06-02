import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController, ToastController} from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { LoadingController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';

/**
 * Generated class for the ModalpendientesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modalpendientes',
  templateUrl: 'modalpendientes.html',
})
export class ModalpendientesPage {
    items = [];
    text;
    classone;
    x;
    ni;
    slug;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public toastCtrl: ToastController,public auth: Auth,public user: User, public loadingCtrl: LoadingController) {
  this.slug = 'examenes';
  let x =  this.user.get('lista-1'+this.slug, null);
  console.log(x);
  this.items = x;
  // console.log(this.slug);
    if (this.auth.isAuthenticated()) {
            console.log(this.user);
            // this.lista = this.user.get('listafoto' , '');
          }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalpendientesPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Su Pendiente Fue Creada',
      duration: 4000,
      position: position
    });

    toast.present(toast);
  }

  listprocess(){
    let loader = this.loadingCtrl.create({
		  content: "Espere"
	  });
    loader.present();
    if(this.text != ''){
      console.log(this.text);
      console.log(this.items.length +1);
      this.ni = { title: this.text, id:this.items.length +1, listo:false, edito:true}; 
      this.items.push(this.ni);
      console.log(this.items);
      this.user.set('lista-1'+this.slug, this.items);
      this.user.save();
      loader.dismiss();
    }else{
      this.user.set('lista-1'+this.slug, this.items);
      this.user.save();
      loader.dismiss();
    }
 
  }

  removeItem(item){
  console.log(item);
      for(let i = 0; i < this.items.length; i++) {
        console.log(i);
        if(this.items[i].id == item){
          console.log('encontre');
          this.items.splice(this.items[i], 1);
          console.log(this.items.splice(i, 1));
          this.user.set('lista-1'+this.slug, this.items);
          this.user.save();
        } 
      } 
    }

    edit(item,slidingItem: ItemSliding){
      slidingItem.close(); 
      
      for(let i = 0; i < this.items.length; i++){
        if(this.items[i].id == item){
          console.log(i);
          this.items[i].edito = false;
          
        }
      }
    }

    check(item,slidingItem: ItemSliding){
    slidingItem.close();      
      for(let i = 0; i < this.items.length; i++){
        if(this.items[i].id == item){
          console.log(i);
          this.items[i].listo = true;
        }
      }

    }
}
