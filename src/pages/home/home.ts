import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import {AddPlacePage} from "../add-place/add-place";
import {Place} from "../../models/place";
import {PlacesService} from "../../services/places";
import {PlacePage} from "../place/place";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addPlacePage=AddPlacePage;
  places: Place[]=[];

  constructor(private placesService: PlacesService, private modalCtrl:ModalController) {

  }

  ionViewWillEnter(){
    this.places=this.placesService.loadPlaces();
  }

  onOpenPlace(place:Place){
    const modal=this.modalCtrl.create(PlacePage,{place:Place});
    modal.present();

  }

}
