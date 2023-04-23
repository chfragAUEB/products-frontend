import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { usersMenu, productsMenu } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Products Frontend';
  usersMenu = usersMenu;
  productsMenu = productsMenu;

  isLoggedIn$ = this.service.isLoggedIn$;
  loggedInUserFullName$ = this.service.loggedInUserFullName$;

  isLoading$ = this.service.isLoading$;

  alerts = this.service.alerts;

  constructor(private service: AuthService) {}

  fakeLogin() {
    this.service.toggleLogin();
  }

  logout() {
    this.service.logout();
  }

  onAlertDismiss(i: number) {
    this.alerts.splice(i, 1);
  }
}
