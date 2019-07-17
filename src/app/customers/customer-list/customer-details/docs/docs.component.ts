import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  @Input() customer$: any;
  docList = [
    {selector: 'fs', title: 'Financial Statements'},
    {selector: 'id', title: 'Official Identification'},
    {selector: 'ad', title: 'Bank Account Document'},
    {selector: 'cd', title: 'Constitutional Document'},
    {selector: 'pd', title: 'Power Document'},
    {selector: 'od', title: 'Other Documents'}
  ];
  docSource = {};
  docColumns = {};

  constructor() { }

  ngOnInit() {
    Object.keys(this.customer$.docRefs).map(
      (el) => {
        if (this.customer$.docRefs[el].length > 0) {
          this.docSource[el] = this.customer$.docRefs[el];
          this.docColumns[el] = [];
          Object.keys(this.customer$.docRefs[el][0]).map(
            col => {
              this.docColumns[el].push(col);
            }
          );
        }
      }
    );
    console.log(this.docSource);
    console.log(this.docColumns);
  }

}
