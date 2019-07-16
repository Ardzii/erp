import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  @Input() customer$: any;
  docList: any[];

  constructor() { }

  ngOnInit() {
    Object.keys(this.customer$.docRefs).map(
      (el) => {
        console.log(el);
      }
    );
  }

}
