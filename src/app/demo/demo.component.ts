import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  @Input() deep: number;
  alert = false;
}
