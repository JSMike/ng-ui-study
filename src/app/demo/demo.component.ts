import { Component, Input } from '@angular/core';
import { MdlSnackbarService } from '@angular-mdl/core';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  @Input() deep: number;

  constructor(private mdlSnackbarService: MdlSnackbarService) {}

  showSnackbar() {
    this.mdlSnackbarService.showSnackbar({
      message: 'The Message',
      action: {
        handler: () => {
          this.mdlSnackbarService.showToast('You hit the ok Button');
        },
        text: 'OK'
      }
    });
  }
}
