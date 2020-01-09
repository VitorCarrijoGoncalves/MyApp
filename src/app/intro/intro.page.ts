import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
    // public navCtrl: NavController,
    // public navParams: NavParams
  ) { }

  ngOnInit() {
  }

  // goToTabsPage() {
  //   this.navCtrl.push(TabsPage);
  // }

}
