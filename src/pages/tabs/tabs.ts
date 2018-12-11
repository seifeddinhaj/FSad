import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { AdsPage } from '../ads/ads'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AdsPage;
  tab3Root = ProfilePage;
  tab4Root = AboutPage;


  constructor() {

  }
}
