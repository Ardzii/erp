import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-comments',
  templateUrl: './customer-comments.component.html',
  styleUrls: ['./customer-comments.component.css']
})
export class CustomerCommentsComponent implements OnInit {

  @Input() customer$: any;
  constructor() { }

  ngOnInit() {
  }

}
