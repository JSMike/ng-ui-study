import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {
  @Input() deep: number;
  title: string;

  ngOnInit() {
    this.title = `IgniteUI: Nesting Level ${this.deep}`;
  }
}
