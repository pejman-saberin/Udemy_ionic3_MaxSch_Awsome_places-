import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SetLocationPage} from '../pages/set-location/set-location';
import {PlacePage} from '../pages/place/place';
import {AddPlacePage} from '../pages/add-place/add-place';
import {AgmCoreModule} from "angular2-google-maps/core";
import {PlacesService} from "../services/places";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SetLocationPage,
    AddPlacePage,
    PlacePage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC5hEU9xJiPOgcE1NdgH7lhtyKYuC1Pke0'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SetLocationPage,
    AddPlacePage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService
  ]
})
export class AppModule {}
