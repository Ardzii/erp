import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docs-edit',
  templateUrl: './docs-edit.component.html',
  styleUrls: ['./docs-edit.component.css']
})
export class DocsEditComponent implements OnInit {
  @Input() customer$: any;
  constructor() { }

  ngOnInit() {
  }

}
