import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    // trigger('slide_in_out', [
    //   state('slide_in', style({
    //     width: '350px',
    //     // css styles when the element is in slide_in
    //   })),
    //   state('slide_out', style({
    //     width: '0px'
    //     // css styles when the element is in slide_out
    //   })),
    //   // animation effect when transitioning from one state to another
    //   transition('slide_in <=> slide_out', animate('300ms ease'))
    // ]),
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('300ms ease')
      ]),
      transition(':leave', [
        animate('300ms ease', style({
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }
  isMenuOpen = false;

  toggleMenu() {

    this.isMenuOpen = !this.isMenuOpen;
  }
}
