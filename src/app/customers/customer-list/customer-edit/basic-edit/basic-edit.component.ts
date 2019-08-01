import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-edit',
  templateUrl: './basic-edit.component.html',
  styleUrls: ['./basic-edit.component.css']
})
export class BasicEditComponent implements OnInit {
  @Input() customer$: any;
  thirdPartyForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.thirdPartyForm = this.fb.group({
      name: this.fb.control(null, Validators.required),
      vat: this.fb.control(null, Validators.required),
      corpoPhone: this.fb.control(null, Validators.required),
      corpoMail: this.fb.control(null, Validators.required),
      corpoWeb: this.fb.control(null, Validators.required),
      activityNumber: this.fb.control(null),
      addresses: this.fb.array([], Validators.required),
    });
    // NEED TO WORK ON THE ADDRESSES
    if (this.customer$) {
      const formStructure = Object.keys(this.thirdPartyForm.controls);
      Object.keys(this.customer$.thirdParty[0]).map(
        el => {
          if (formStructure.indexOf(el) !== -1) {
            this.thirdPartyForm.get(el).patchValue(this.customer$.thirdParty[0][el]);
          }
        }
      );
    }
  }

  onSubmit() {
    console.log(this.thirdPartyForm.value);
  }

}
