import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  isAboutActive: boolean = false;
  isHomeActive: boolean = false;
  isCalendarActive: boolean = false;
  isMembersActive: boolean = false;
  isSeriesActive: boolean = false;
  isForumActive: boolean = false;
  isLogInActive: boolean = false;

  ngOnInit(): void {
    console.log(this.router.url);
    const loggedIn = this.checkToken();

    if (this.router.url == '/') {
      this.isHomeActive = true;
    }

    if (this.router.url == '/aboutus') {
      this.isAboutActive = true;
    }

    if (this.router.url == '/calendar') {
      this.isCalendarActive = true;
    }

    if (this.router.url == '/rating') {
      this.isMembersActive = true;
    }
    if (this.router.url == '/series') {
      this.isSeriesActive = true;
    }
    if (this.router.url == '/forum') {
      this.isForumActive = true;
    }
    if (this.router.url == '/login') {
      this.isLogInActive = true;
    }
  }
  checkToken(): boolean {
    var cookie = document.cookie;
    cookie = cookie.split('token=')[1];
    if (cookie == undefined || cookie == '') {
      return false;
    }

    return true;
  }
}
