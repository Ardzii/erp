import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerEditService {
  private cusForm: FormGroup = this.fb.group({
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

  constructor(
    private fb: FormBuilder
    ) {    }

    // **** EMPTY FORMS GETTERS ****

    getAddressForm(address?: any) {
      const addressForm: FormGroup = this.fb.group({
        street: this.fb.control(null),
        streetcomp: this.fb.control(null),
        streetcomp2: this.fb.control(null),
        city: this.fb.control(null),
        cp: this.fb.control(null),
        state: this.fb.control(null),
        country: this.fb.control(null),
        main: this.fb.control(null)
      });
      if (address) {
        addressForm.setValue(address);
      }
      return addressForm;
    }

    getFilledThirdPartyForm(thirdParty?: any) {
      const thirdPartyForm: FormGroup = this.fb.group({
        name: this.fb.control(null, Validators.required),
        vat: this.fb.control(null, Validators.required),
        corpoPhone: this.fb.control(null, Validators.required),
        corpoMail: this.fb.control(null, Validators.required),
        corpoWeb: this.fb.control(null, Validators.required),
        activityNumber: this.fb.control(null),
      });
      if (thirdParty) {
        Object.keys(thirdParty).map(
          el => {
            if (Object.keys(thirdPartyForm.controls).indexOf(el) !== -1 && el !== 'addresses') {
              thirdPartyForm.get(el).setValue(thirdParty[el]);
            }
        });
      }
      return thirdPartyForm;
    }

}
