import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  customers: any;
  isLoading = false;

  constructor(private cs: CustomerService) { }

  ngOnInit() {
    this.isLoading = true;
    this.cs.getCustomers().subscribe(
      (res: any) => {
        this.customers = res.customers;
        console.log(this.customers);
        this.isLoading = false;
      }
    );
  }

}
