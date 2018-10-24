import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeocacheServiceProvider } from '../../providers/geocache-service/geocache-service';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  public caches: any[]
  constructor(public navCtrl: NavController, public navParams: NavParams, private servico: GeocacheServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    this.servico.getGPSLocation()
  }

  latlong : any = null
  getCurrentLocation(){
      //this.latlong =  servico.getCurrentLocation();
      console.log(this.servico)
  }

}
