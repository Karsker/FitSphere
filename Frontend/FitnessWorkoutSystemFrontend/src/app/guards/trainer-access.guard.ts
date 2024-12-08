import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { inject } from '@angular/core';
import { Observable, of, switchMap,skip } from 'rxjs';

export const trainerAccessGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const userService = inject(UserService);
  
  if (auth.isLoggedIn.value) {
    if (userService.CurrentUser.value == null) {
      // Skip the first emitted value since it will be null (initial value of the subject)
      return userService.CurrentUser.pipe(switchMap(u => of((u != null && u.role == "Trainer")?true:router.parseUrl('/user/home'))));
    }

    if (userService.CurrentUser.value.role == "Trainer") {
      return true;
    }

    return router.parseUrl('/user/home');
  }
  
  return router.parseUrl('/auth/login');
};
