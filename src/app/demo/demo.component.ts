import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {
  @Input() deep: number;
  alert = false;
  breadcrumbs: number[];

  ngOnInit() {
    this.breadcrumbs = Array.from(Array(this.deep + 1).keys());
  }
}
