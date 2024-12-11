import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { of, skip, switchMap } from 'rxjs';

export const adminAccessGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const userService = inject(UserService);
  
  const reroute = (user: any): UrlTree | boolean => {

    if (user.role == "Admin") {
      return true;
    } else if (user.role == "Trainer") {
      return router.parseUrl("/trainer/home");
    } else if (user.role == "User") {
      return router.parseUrl("/user/home");
    } 

    return false;
  }

  if (auth.isLoggedIn.value) {
    if (userService.CurrentUser.value == null) {
      // Skip the first emitted value since it will be null (initial value of the subject)
      return userService.CurrentUser.pipe(switchMap(u => of((u != null) && reroute(u))), skip(1));
    }

    return reroute(userService.CurrentUser.value);
  }
  
  return router.parseUrl('/auth/login');
};
