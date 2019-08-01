import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer$: any;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
    ) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.customerService.getCustomer(params.get('id')).subscribe(
          (document: any) => {
            this.customer$ = document.customer;
            this.isLoading = false;
          }
        );
      }
    );
  }

}
