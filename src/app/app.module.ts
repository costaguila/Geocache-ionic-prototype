import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IndexPage } from '../pages/index/index';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
///
import { Geolocation } from '@ionic-native/geolocation';
///
import { GeocacheServiceProvider } from '../providers/geocache-service/geocache-service';

@NgModule({
  declarations: [
    MyApp,
    IndexPage,
    AboutPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IndexPage,
    AboutPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    GeocacheServiceProvider

  ]
})
export class AppModule {}
