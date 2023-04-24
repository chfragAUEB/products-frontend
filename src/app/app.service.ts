import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserAPIUserOne } from 'shared';
import { BehaviorSubject } from 'rxjs';

const USER_API = 'https://codingfactory.ddns.net/api/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSubject.asObservable();

  private loggedInUserFullnameSubject = new BehaviorSubject<string>('');
  loggedInUserFullname$ = this.loggedInUserFullnameSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    this.http
      .get<UserAPIUserOne>(`${USER_API}/findone/${username}`)
      .subscribe((user) => {
        if (user.data) {
          this.loggedInSubject.next(user.data.password === password);
          this.loggedInUserFullnameSubject.next(
            `${user.data.name} ${user.data.surname}`
          );
        }
      });
  }

  logout() {
    this.loggedInSubject.next(false);
    this.loggedInUserFullnameSubject.next('');
  }
}
