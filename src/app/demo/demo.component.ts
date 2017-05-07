import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ng-ui-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  @Input() deep: number;
  showAlert = false;
  alertTimeout: any;
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content);
  }

  alert() {
    this.clearAlert();
    this.showAlert = true;
    this.alertTimeout = setTimeout(() => {
      this.clearAlert();
    }, 4000);
  }

  clearAlert() {
    if (this.alertTimeout) {
      clearTimeout(this.alertTimeout);
    }
    this.alertTimeout = null;
    this.showAlert = false;
  }
}