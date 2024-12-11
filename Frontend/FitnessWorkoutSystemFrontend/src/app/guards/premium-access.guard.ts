import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { of, skip, switchMap } from 'rxjs';

export const premiumAccessGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const userService = inject(UserService);
 
  if (auth.isLoggedIn.value) {
    if (userService.CurrentUser.value == null) {
      // Skip the first emitted value since it will be null (initial value of the subject)
      return userService.CurrentUser.pipe(switchMap(u => of((u != null && u.hasPremium)?true:router.parseUrl('/user/home/premium'))), skip(1));
    }

    if (userService.CurrentUser.value.hasPremium) {
      return true;
    }

    return router.parseUrl('/user/home/premium');
  }
  
  return router.parseUrl('/auth/login');
};
