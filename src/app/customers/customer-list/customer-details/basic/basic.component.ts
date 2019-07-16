import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  @Input() customer$: any;
  constructor() { }

  ngOnInit() {
    console.log(this.customer$);
  }

}
