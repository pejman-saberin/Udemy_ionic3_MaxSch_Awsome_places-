import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ModalController,ToastController,LoadingController} from 'ionic-angular';
import {Geolocation} from "ionic-native"; // this is for ionic 2 as mentioned in lecture 182
//import { Geolocation } from '@ionic-native/geolocation'; //this is for ionic 3. the lecture is based on ionic 2 so this is commented out

import {SetLocationPage} from "../set-location/set-location";
import {Location} from "../../models/location";


@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  location: Location={//this is preview location
    lat:40.7624234,
    lng: -73.9759827
  };

  locationIsSet=false;

  constructor(private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private  toastCtrl: ToastController){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }
  onSubmit (form:NgForm){
    console.log(form.value);
  }

  onOpenMap(){
    const modal=this.modalCtrl.create(SetLocationPage, {location: this.location,IsSet:this.locationIsSet});
    modal.present();  //opnes the set-location modal
    modal.onDidDismiss( //this will be executed once the modal gets dismissed
      data=>{
        if(data){
          this.location=data.location; //once you click confirm on teh moadal, if data is present it is passed to this
          this.locationIsSet=true;
        }
      });
  }

  onLocate(){
    const loader=this.loadingCtrl.create({
      content: 'Getting your Location...'
    })
    loader.present();
    Geolocation.getCurrentPosition()  //this returns a promise. hence you can you then.
      .then(
        location=>{
          loader.dismiss();
        this.location.lat=location.coords.latitude;
        this.location.lng=location.coords.longitude;
        this.locationIsSet=true;
        }
      )
      .catch(
        error=>{
          loader.dismiss();
          const toast=this.toastCtrl.create({
            message: 'Could get location,please pick it manually!',
            duration:2500
          })
          toast.present();       
        }
      );

  }



}
