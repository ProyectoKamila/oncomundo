import { Component, ViewChild  } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { SelectPage } from '../select/select';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('mySlider') slider: Slides;

  mySlideOptions = {
    initialSlide: 0,
    loop: false,
    pager: true
  };
  constructor(public navCtrl: NavController) {

  }
  select(){
      this.navCtrl.push(SelectPage);
  }

}
