import { EventEmitter, Injectable } from '@angular/core';
import { Tour } from '../models/tour.model';
import { PacketTour } from '../models/packetTour.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  tourSelected = new EventEmitter<Tour>();
  
  private tourList : Tour[] = [
    new Tour('Id01', 'Testing Tour', './assets/kinh-nghiem-du-lich-vinh-ha-long-2.jpg',true,'',[],[]),
    new Tour('Id02', 'Testing Tour', './assets/kinh-nghiem-du-lich-vinh-ha-long-2.jpg', true,'',[],[]),
    new Tour('Id03', 'Testing Tour', './assets/kinh-nghiem-du-lich-vinh-ha-long-2.jpg', false,'',[],[]),
  ];
  constructor() { }

  getTourList() {
    return this.tourList;
  }

  getTour(index: number){
    return this.tourList[index];
  }

}
