import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/models/tour.model';

@Component({
  selector: 'app-tour-item',
  templateUrl: './tour-item.component.html',
  styleUrls: ['./tour-item.component.css']
})
export class TourItemComponent {
  @Input() tourItem: Tour;
  @Input() index: number;

  constructor(){}
}
