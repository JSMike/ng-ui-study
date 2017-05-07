import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  @Input() deep: number;
  public maskedValue: string;
  public sliderValue: number = 5;
  public numericValue: number = 5;
  public switchValue: boolean = false;
  public min: number = 0;
  public max: number = 10;
  public smallStep: number = 1;
  public listItems: Array<string> = ['Option 1', 'Option 2', 'Option 3'];
  public pop: boolean = false;
  public tool: boolean = false;
  public dialog: boolean = false;
  public popAlign: {} = { vertical: 'top', horizontal: 'right' };
  public anchorAlign: {} = { vertical: 'top', horizontal: 'right' };

}
