import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';
import { Tour } from 'src/app/models/tour.model';
@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  saleTour: Tour[];
  constructor(private tourService: TourService){};

  ngOnInit(): void {
    this.saleTour = this.tourService.getTourList();
    // let result = this.tourService.getTourList().slice();
    // for(let item of result){
    //   if(item.ForSale){
    //     this.saleTour.push(item);
    //   }
    // }
  }
}
