import { NgModule, inject } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';

import { UiModule } from 'ui';

import { UserService } from './user.service';
import { AuthService } from '../auth.service';

import { UsersListComponent } from './users-list/users-list.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopbarComponent } from './topbar/topbar.component';

const usersGuard = () => {
  const router = inject(Router);
  const service = inject(AuthService);
  return service.isLoggedIn$.pipe(
    tap((isLoggedIn) => {
      return !isLoggedIn ? router.navigate(['/login']) : true;
    })
  );
};

const routes: Routes = [
  { path: 'list', component: UsersListComponent, canActivate: [usersGuard] },
  {
    path: 'insert',
    component: UserInsertComponent,
    canActivate: [usersGuard],
  },
  { path: '', component: WelcomeComponent, canActivate: [usersGuard] },
  { path: '', component: TopbarComponent, outlet: 'topbar' },
];

@NgModule({
  declarations: [
    UsersListComponent,
    UserInsertComponent,
    WelcomeComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    UiModule,
  ],
  providers: [UserService],
})
export class UsersModule {}
