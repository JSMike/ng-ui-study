import { Component, Input } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  @Input() deep: number;

  constructor(public dialog: MdDialog, public snackbar: MdSnackBar) {}

  openDialog() {
    this.dialog.open(DemoDialogComponent);
  }

  openSnackbar() {
    this.snackbar.open('Snackbar Example', 'Ok!', { duration: 1000 });
  }
}

@Component({
  selector: 'ng-ui-demo-dialog',
  template: '<em>Dialog!</em>',
})
export class DemoDialogComponent {}
