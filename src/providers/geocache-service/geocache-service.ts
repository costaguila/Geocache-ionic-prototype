import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { GeoCacheModel } from './geocache-model';

/*
  Generated class for the GeocacheServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeocacheServiceProvider {

  data: any  = null;
  public geocaches: GeoCacheModel[];
  constructor(public http: HttpClient, private geolocation: Geolocation) {
    console.log('Hello GeocacheServiceProvider Provider')
    this.geocaches = new Array<GeoCacheModel>();
  }

  getGPSLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
     console.log(resp.coords.latitude);
     console.log(resp.coords.longitude);
     this.data = [resp.coords.latitude,resp.coords.longitude];
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  
  getGPSCurrentLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
     console.log(resp.coords.latitude);
     console.log(resp.coords.longitude);
     this.data = [resp.coords.latitude,resp.coords.longitude];
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAllData(){
    if(this.data != null){
    return this.data;
    }
    else{
      return null;
    }
  }

  addItem(latitude,longitude,desc){
    this.geocaches.push(new GeoCacheModel(latitude,longitude,desc))

  }

  getAllGeochaches(){
    return this.geocaches;
  }

}
