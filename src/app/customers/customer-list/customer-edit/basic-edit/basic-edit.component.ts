import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-edit',
  templateUrl: './basic-edit.component.html',
  styleUrls: ['./basic-edit.component.css']
})
export class BasicEditComponent implements OnInit {
  @Input() customer$: any;
  constructor() { }

  ngOnInit() {
  }

}
