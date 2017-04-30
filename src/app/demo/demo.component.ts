import { Component, Input, OnInit } from '@angular/core';
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Input() deep: number;

  constructor(private toastService: MzToastService) {}

  showToast() {
    this.toastService.show('I am a toast!', 4000, 'green');
  }
  ngOnInit() {
  }

}
