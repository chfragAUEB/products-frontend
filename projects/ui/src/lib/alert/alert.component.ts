import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() type: 'primary' | 'success' | 'info' | 'warning' | 'danger' = 'info';
  @Input() heading: string | undefined;
  @Input() text = 'This is the alert text';
  @Input() spinner: boolean | undefined;
  @Output() dismiss = new EventEmitter();

  onDismiss() {
    this.dismiss.emit();
  }
}
