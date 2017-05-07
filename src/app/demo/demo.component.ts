import { Component, Input } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html'
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
  template: `
    <h3 md-dialog-title>Dialog Title</h3>
    <md-dialog-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at pulvinar magna, eu accumsan arcu.</p>
      <p>Aenean sodales laoreet turpis, quis congue purus tincidunt facilisis.</p>
    </md-dialog-content>
    <md-dialog-actions>
      <button md-raised-button md-dialog-close color="accent">Close <md-icon>close</md-icon></button>
    </md-dialog-actions>
  `
})
export class DemoDialogComponent {}
