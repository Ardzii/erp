import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit {
  @Input() customer$: any;
  constructor() { }

  ngOnInit() {
  }

}
