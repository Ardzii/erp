import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/customers/customer.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() customer$: any;
  isLoading = false;
  salesRepData = [];
  salesRepColumns: string[] = [
    'user_id',
    'dateBegin',
    'active',
    'actions'
  ];
  contacts: any;

  constructor(
    private customerService: CustomerService
    ) { }

  ngOnInit() {
    // TODO: Change to real name
    this.salesRepData = this.customer$.salesRep;

    // TODO: Add thirdparty population to get the contacts.
    this.isLoading = true;
    this.customerService.getThirdParties().subscribe(
      (res: any) => {
        this.contacts = res.thirdParties;
        console.log(this.contacts);
      }
    );
  }

}
