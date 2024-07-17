import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  options = [
    { name: 'Buttons', path: '/preline/buttons' },
    { name: 'Carousel', path: '/preline/carousel' },
    { name: 'Alerts', path: '/preline/alerts' },
    { name: 'Badges', path: '/preline/badges' },
  ];
}
