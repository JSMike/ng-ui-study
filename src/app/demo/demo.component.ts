import { Component, Input } from '@angular/core';
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  @Input() deep: number;

  constructor(private toastService: MzToastService) {}

  showToast() {
    this.toastService.show('I am a toast!', 4000, 'green');
  }
}
