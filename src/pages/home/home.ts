import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdsProvider } from "../../services/ads";
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
adsliste:any;
  constructor(public navCtrl: NavController ,private ads: AdsProvider, private alertCtrl:AlertController ) {
    this.ads.allAds().subscribe((adsTabel:any)=>
            {

                this.adsliste = adsTabel;

        });
  }
  showAlert(){
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
