import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer$: any;
  customerId: string;
  isLoading = false;

  // REPLACE CUSTOMER$ IN THE SUBSECTIONS BY THE FORM;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
    ) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if (params.get('id')) {
          this.customerId = params.get('id');
          this.customerService.getCustomer(this.customerId).subscribe(
            (res: any) => {
              this.customer$ = res.customer;
              this.isLoading = false;
            }
          );
        } else {
          console.log('NEW CUSTOMER!!');
          this.isLoading = false;
        }
      }
    );
  }

}
