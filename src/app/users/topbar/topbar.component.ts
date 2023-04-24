import { Component } from '@angular/core';
import { appName, usersMenu, productsMenu } from 'shared';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  appName = appName;
  usersMenu = usersMenu;
  productsMenu = productsMenu;
  isLoggedIn$ = this.service.isLoggedIn$;
  loggedInUserFullName$ = this.service.loggedInUserFullName$;
  constructor(private service: AuthService) {}

  logout() {
    this.service.logout();
  }
}
