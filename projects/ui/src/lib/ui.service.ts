import { Injectable } from '@angular/core';
import { Alert } from 'shared';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  alerts: Alert[] = [];

  newAlert(alert: Alert) {
    this.alerts.push(alert);
  }

  alertDismiss(i: number) {
    this.alerts.splice(i, 1);
  }
}
