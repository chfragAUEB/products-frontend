import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserAPIUserOne } from 'shared';
import { BehaviorSubject } from 'rxjs';
import { UiService } from 'ui';

const USER_API = 'https://codingfactory.ddns.net/api/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSubject.asObservable();

  private loggedInUserFullnameSubject = new BehaviorSubject<string>('');
  loggedInUserFullname$ = this.loggedInUserFullnameSubject.asObservable();

  constructor(private http: HttpClient, private alertService: UiService) {}

  login(username: string, password: string) {
    this.http
      .get<UserAPIUserOne>(`${USER_API}/findone/${username}`)
      .subscribe((user) => {
        if (user.data) {
          this.loggedInSubject.next(user.data.password === password);
          this.loggedInUserFullnameSubject.next(
            `${user.data.name} ${user.data.surname}`
          );
        } else {
          this.alertService.newAlert({
            type: 'danger',
            heading: 'Authentication Error',
            text: 'Wrong user name or password',
          });
        }
      });
  }

  logout() {
    this.loggedInSubject.next(false);
    this.loggedInUserFullnameSubject.next('');
  }
}
