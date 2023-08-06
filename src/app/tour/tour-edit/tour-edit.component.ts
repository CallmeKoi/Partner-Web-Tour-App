import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, FormArrayName } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Itinerary } from 'src/app/models/tourItinerary.model';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {

  currentSection = 'section1';
  id: number;
  editable: boolean = false;
  tourForm: FormGroup;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private tourService: TourService,
    private fb: FormBuilder) {}

    onSectionChange(sectionId: string) {
      this.currentSection = sectionId;
    }
  
    scrollTo(section: string) {
      document.querySelector('#' + section)
      .scrollIntoView();
    }
    
  ngOnInit(): void {
    //hiển thị form
    this.tourForm = this.fb.group({
      TourName: this.fb.control('',Validators.required),
      TourDesc: this.fb.control('',Validators.required),
      Contact: this.fb.control('',[Validators.required, Validators.pattern(/^\d{10}$/)]),
      Location: this.fb.control('', Validators.required),
      itineraryList: this.fb.array([this.getItineraryFields(0)]),
      Price: this.fb.control(null),
      Additional: this.fb.control(null),
      
    });
  }

  getItineraryFields(index: number = 0): FormGroup{
    return this.fb.group({
      dayActivity: this.fb.group({
        Day: index + 1,
        activityList: this.fb.array([this.newActivity(0)])
      })
    })
  }

  get itineraryListArray(): FormArray{
    return this.tourForm.get('itineraryList') as FormArray;
  }


  addItinerary(){
    this.itineraryListArray.push(this.getItineraryFields(this.itineraryListArray.length));
  }

  removeItinerary(index: number){
    this.itineraryListArray.removeAt(index);
  }

  getFormData(){
    console.log(this.tourForm.value);
  }

  activityFormGroup(i:number){
    return this.itineraryListArray.at(i).get('dayActivity') as FormGroup;
  }

  activityList(i:number){
    return this.activityFormGroup(i).get('activityList') as FormArray;
  }

  addActivity(i:number){
    this.activityList(i).push(this.newActivity(this.activityList(i).length));
  }

  newActivity(index: number){
    return this.fb.group({
      id: index + 1,
      startTime: this.fb.control('',Validators.required),
      endTime: this.fb.control('',Validators.required),
      activity: this.fb.control('',Validators.required)
    });
  }
  
  removeActivity(i:number,j:number){
    this.activityList(i).removeAt(j);
  }

  saveActivity(){
    const itineraryList = new FormData();
    const itineraries = this.itineraryListArray.controls
    .map((control) => {
      const day= (<FormGroup>control.get('dayActivity')).value;
      console.log(day);
      const activityList = (<FormArray>control.get('dayActivity.activityList')).controls
      .map((item) => {
        const activity = item.value;
        console.log(activity);
        itineraryList.append(activity.name, activity.value);
        // itineraryList.push(new FormGroup({
        //   "id":activity.id,
        //   "Day":activity.day,
        //   "startTime":activity.activity,
        //   "endTime":activity.startTime,
        //   "activity":activity.endTime}));
      });  
    });
    console.log(itineraryList);
  }
}
