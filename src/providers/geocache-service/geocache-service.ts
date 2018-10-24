import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
/*
  Generated class for the GeocacheServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeocacheServiceProvider {

  data: any = ["a001","b002","c003","d004"];

  constructor(public http: HttpClient, private geolocation: Geolocation) {
    console.log('Hello GeocacheServiceProvider Provider');
  }

  getGPSLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
     console.log(resp.coords.latitude);
     console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAllData(){
    return this.data;
  }

}
