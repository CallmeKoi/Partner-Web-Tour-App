import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-packet-edit',
  templateUrl: './packet-edit.component.html',
  styleUrls: ['./packet-edit.component.css']
})
export class PacketEditComponent {

  currentSection = 'section1';
  id: number;
  editable: boolean = false;
  packetForm: FormGroup;

  constructor(private fb: FormBuilder){}

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: string) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }

  ngOninit(){
    this.packetForm = this.fb.group({
      PacketName: this.fb.control('',Validators.required),
      PacketDesc: this.fb.control('',Validators.required),
      Duration: this.fb.control('',Validators.required),
      startDate: this.fb.control('',Validators.required),
      endDate: this.fb.control('', Validators.required),

      PreDays: this.fb.control(''),
      SLVoucher: this.fb.control('',Validators.required),
      GocA: this.fb.control('',Validators.required),
      AppA: this.fb.control('',Validators.required),
      TNA: this.fb.control('',Validators.required),
      GocC: this.fb.control('',Validators.required),
      AppC: this.fb.control('',Validators.required),
      TNC: this.fb.control('',Validators.required),
      policy: this.fb.control('')
    });
  }
}
