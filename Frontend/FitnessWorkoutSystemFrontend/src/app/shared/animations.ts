import { animate, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('0.25s ease-in', style({ opacity: 1 })),
]);

const exitTransition = transition(':leave', [
    style({
      opacity: 1,
    }),
    animate('0.25s ease-out', style({ opacity: 0 })),
  ]);

export const fadeIn = trigger('fadeIn', [enterTransition]);

export const fadeOut = trigger('fadeOut', [exitTransition]);