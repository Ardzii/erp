import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CustomerEditService } from '../customer-edit.service';

@Component({
  selector: 'app-basic-edit',
  templateUrl: './basic-edit.component.html',
  styleUrls: ['./basic-edit.component.css']
})
export class BasicEditComponent implements OnInit {
  @Input() customer$: any;
  thirdPartyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cusEditService: CustomerEditService
    ) { }

  ngOnInit() {
    // NEED TO WORK ON THE ADDRESSES
    if (this.customer$) {
      this.thirdPartyForm = this.cusEditService.getFilledThirdPartyForm(this.customer$.thirdParty[0]);
      const addresses: any[] = this.customer$.thirdParty[0].addresses;
      const addressesFormArr: FormArray = new FormArray([]);
      addresses.forEach(
        address => {
          const currAddressForm: FormGroup = this.cusEditService.getAddressForm(address);
          addressesFormArr.push(currAddressForm);
        });
      this.thirdPartyForm.setControl('addresses', new FormArray([
        addressesFormArr
        ])
      );
      console.log(this.thirdPartyForm.value);
    }
  }

  onSubmit() {
    console.log(this.thirdPartyForm.value);
  }

}
