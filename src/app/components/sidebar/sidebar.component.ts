import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Acceuil', title: 'Acceuil',  icon: 'dashboard', class: '' },
    { path: '/profile', title: 'profile',  icon: 'person', class: '' },
    { path: '/liste-employè', title: 'liste employè',  icon: 'assignment_ind', class: '' },
    { path: '/liste-congè', title: 'liste congè',  icon: 'date_range', class: '' },
    { path: '/liste-avance', title: 'liste avance',  icon: 'euro_symbol', class: '' },
    { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
    { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
