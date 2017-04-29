import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Input() deep: number;
  alert = false;
  constructor() { }

  ngOnInit() {
  }

}
