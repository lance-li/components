import {trigger, state, style, animate, transition} from '@angular/animations';


export const fadeIn = trigger('fadeIn', [
  transition("void => *", [
    style({ opacity: 0 }),
    animate(600, style({ opacity: 1 }))
  ]),
  transition("* => void", [
    animate(600, style({ opacity: 0 }))
  ])
]);


export const slideToggle = trigger('slideToggle', [
  state('inactive', style({
    transform: 'translateY(100%)',
    display: 'none'
  })),
  state('active', style({
    transform: 'translateY(0%)',
    display: 'block'
  })),
  transition('inactive => active', animate('300ms ease-in-out')),
  transition('active => inactive', animate('300ms ease-in-out'))
]);

export const layerToggle = trigger('layerToggle', [
  state('inactive', style({
    display: 'none',
    opacity:'0'
  })),
  state('active', style({
    display: 'block',
    opacity:'1'
  })),
  transition('inactive => active', animate('300ms ease-in-out')),
  transition('active => inactive', animate('100ms ease-in-out'))
]);
