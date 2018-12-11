import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdsProvider } from "../../services/ads";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
adsliste:any;
  constructor(public navCtrl: NavController ,private ads: AdsProvider ) {
    this.ads.allAds().subscribe((adsTabel:any)=>
            {

                this.adsList = adsTabel;

        });
  }

}
