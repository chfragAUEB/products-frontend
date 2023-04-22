import { Component } from '@angular/core';
import { MenuItem } from './app.interfaces';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Products Frontend';

  usersMenu: MenuItem[] = [
    { text: 'List all Users', link: 'user/list' },
    { text: 'Insert a User', link: 'user/insert' },
    { text: 'Delete a User', link: 'not-implemented-yet' },
    { text: 'Update a User', link: 'not-implemented-yet' },
  ];

  productsMenu: MenuItem[] = [
    { text: 'List all Products', link: 'not-implemented-yet' },
    { text: 'Insert a Product', link: 'not-implemented-yet' },
    { text: 'Delete a Product', link: 'not-implemented-yet' },
    { text: 'Update a Product', link: 'not-implemented-yet' },
  ];

  isLoggedIn$ = this.service.isLoggedIn$;
  loggedInUserFullName$ = this.service.loggedInUserFullName$;
  constructor(private service: AuthService) {}

  login() {
    this.service.toggleLogin();
  }

  logout() {
    this.service.logout();
  }
}
