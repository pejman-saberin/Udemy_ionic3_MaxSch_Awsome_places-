import { Component } from '@angular/core';
import {NavParams,ViewController} from 'ionic-angular';

import {Location} from "../../models/location";

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {
  location: Location;
  marker: Location;

  constructor(private navParams: NavParams, private  viewCtrl: ViewController){
    this.location=this.navParams.get('location');  //getting location from modals
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetLocationPage');
  }

  onSetMarker(event: any){  //event is passed in from the google map after user clicks on  passing the new lat and lng
    console.log(event);
    this.marker=new Location(event.coords.lat,event.coords.lng);
  }

  onConfirm(){
    this.viewCtrl.dismiss({location: this.marker}); //closes while passing the data from the marker
  }
  onAbort(){
    this.viewCtrl.dismiss();  //just closes the moal
  }

}
