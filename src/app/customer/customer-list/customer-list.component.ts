import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: object;
  constructor(private cs: CustomerServiceService) { }

  ngOnInit() {
    this.cs.getCustomers().subscribe(
      (res: any) => {
        this.customers = res.customers;
        // console.log(this.customers);
      }
    );
  }

}
