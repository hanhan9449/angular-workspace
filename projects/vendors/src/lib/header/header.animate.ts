import {animate, state, style, transition, trigger} from "@angular/animations";

export const headerAnimate = [
  trigger('smallScreenList', [
  transition(':enter', [
    style({opacity: 0}),
    animate('300ms', style({opacity: 1}))
  ]),
  transition(':leave', [
    style({opacity: 1}),
    animate('140ms', style({opacity: 0}))
  ])
])
]
