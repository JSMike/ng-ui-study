import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, Message, SelectItem } from 'primeng/primeng';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Input() deep: number;
  items: MenuItem[] = [];
  breadcrumbs: MenuItem[] = [];
  alerts: Message[] = [];
  options: SelectItem[] = [];

  viewDialog = false;
  viewAlert = false;
  viewPopover = false;
  viewTooltip = false;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Dialog',
        command:  () => {
          this.viewDialog = !this.viewDialog;
        }
      },
      {
        label: 'Growl',
        command:  () => {
          this.alerts = [{
            severity: 'info',
            summary: 'Example Alert',
            detail: 'This is an example alert message.'
          }];
        }
      }
    ];
    this.options = [
      {
        label: 'Option 1',
        value: 1
      },
      {
        label: 'Option 2',
        value: 2
      },
      {
        label: 'Option 3',
        value: 3
      }
    ];
    this.breadcrumbs = Array.from(Array(this.deep + 1).keys())
      .map((d) => <MenuItem>{ label: `Nesting Level ${d}`});
  }

}
