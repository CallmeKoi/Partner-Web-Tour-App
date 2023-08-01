import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent {


  form: FormGroup = this.formBuilder.group({
    
  });

  constructor(private formBuilder: FormBuilder) {};
}
