import { Component } from '@angular/core';
import { Tour } from '../models/tour.model';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tourList: Tour[];

  constructor(private tourService: TourService){}

  ngOnInit(){
    this.tourList = this.tourService.getTourList();
  }
}
