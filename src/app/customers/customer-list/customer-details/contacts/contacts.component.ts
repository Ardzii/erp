import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/customers/customer.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() customer$: any;

  salesRepData = [];
  salesRepColumns: string[] = [
    'user_id',
    'dateBegin',
    'active',
    'actions'
  ];

  contactsData: any;
  tpContacts: string[] = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'actions'
  ];

  constructor() { }

  ngOnInit() {
    // TODO: Change to real name
    this.salesRepData = this.customer$.salesRep;

    // TODO: Add thirdparty population to get the contacts.
    this.contactsData = this.customer$.thirdParty[0].contacts;

  }

}
