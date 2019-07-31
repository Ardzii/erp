import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-comments-edit',
  templateUrl: './customer-comments-edit.component.html',
  styleUrls: ['./customer-comments-edit.component.css']
})
export class CustomerCommentsEditComponent implements OnInit {
  @Input() customer$: any;
  constructor() { }

  ngOnInit() {
  }

}
