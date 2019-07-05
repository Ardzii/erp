import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: object[];
  opened: boolean;

  constructor(private cs: CustomerService) { }

  ngOnInit() {
    this.cs.getCustomers().subscribe(
      (res: any) => {
        this.customers = res.customers;
      }
    );
  }

}
