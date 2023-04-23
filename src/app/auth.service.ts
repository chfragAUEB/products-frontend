import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Alert } from 'shared';

interface User {
  data: {
    username: string;
    password: string;
    name: string;
    surname: string;
  };
}

const USER_API = 'https://codingfactory.ddns.net/api/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSubject.asObservable();

  private loggedInUserFullNameSubject = new BehaviorSubject<string>('');
  loggedInUserFullName$ = this.loggedInUserFullNameSubject.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();
  setLoadingState(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }

  alerts: Alert[] = [];

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    this.http.get<User>(`${USER_API}/findone/${username}`).subscribe((user) => {
      console.log(user);
      // Πριν το alert service
      // this.loggedInSubject.next(user.data.password === password);
      // this.loggedInUserFullNameSubject.next(
      //   `${user.data.name} ${user.data.surname}`
      // );
      if (user.data && user.data.password === password) {
        this.loggedInSubject.next(user.data.password === password);
        this.loggedInUserFullNameSubject.next(
          `${user.data.name} ${user.data.surname}`
        );
      } else {
        this.alerts.push({
          type: 'danger',
          heading: 'Authentication Error',
          text: 'Wrong username or password',
        });
        console.log(this.alerts);
      }
    });
  }

  newAlert(alert: Alert) {
    this.alerts.push(alert);
  }

  logout() {
    this.loggedInSubject.next(false);
    this.loggedInUserFullNameSubject.next('');
  }

  toggleLogin() {
    const value = this.loggedInSubject.value;
    this.loggedInSubject.next(!value);
  }
}
