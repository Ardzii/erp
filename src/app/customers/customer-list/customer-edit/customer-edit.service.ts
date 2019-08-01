import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerEditService {
  private cusForm: FormGroup;
  constructor(
    private fb: FormBuilder
    ) {
      this.cusForm = this.fb.group({
        thirdParty: this.fb.group({
          name: this.fb.control(null),
          vat: this.fb.control(null),
          corpoPhone: this.fb.control(null),
          corpoMail: this.fb.control(null),
          corpoWeb: this.fb.control(null),
          activityNumber: this.fb.control(null),
          addresses: this.fb.array([]),
          contacts: this.fb.array([])
        }),
        docRefs: this.fb.group({}),
        commentsArr: this.fb.group({})
      });
    }

  setThirdParty(cusTp: FormGroup) {
    this.cusForm.get('thirdParty').setValue(cusTp);
  }

  setContact(tpContacts: FormArray) {
    this.cusForm.get('thirdParty').get('contacts').setValue(tpContacts);
  }

  setDocRefs(docRefs: FormGroup) {
    this.cusForm.get('docRefs').setValue(docRefs);
  }

  setCommentsArr(comments: FormGroup) {
    this.cusForm.get('commentsArr').setValue(comments);
  }

}
