import { ViewChild,NgZone } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import * as io from 'socket.io-client';
import 'hammerjs';
import 'hammer-timejs';
/**
 * Generated class for the Oncochat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-oncochat',
  templateUrl: 'oncochat.html',
})
export class OncochatPage {
  @ViewChild(Content) content:Content
  messages:any = [];
  socketHost: string = "https://adminbj-proyectokamila.c9users.io:8082";
  socket:any;
  chat:any;
  username:string;
  zone:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.socket = io.connect(this.socketHost);
    this.socket.emit('conf',{'project': 'bouquet.com'});

    this.zone = new NgZone({enableLongStackTrace: false});
    this.socket.on("chat message", (msg) =>{
      this.zone.run(() =>{
        this.messages.push(msg);
        this.content.scrollToBottom();
      });
    });
  }

 chatSend(v){
  let data = {
    message: v.chatText,
    username: this.username
  }
  this.socket.emit('new message', data);
  this.chat= '';

 }

}
