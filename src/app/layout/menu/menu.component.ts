import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.userLogged();
  }
  userLogged() {
    if (localStorage.getItem('authentication')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('authentication');
    // this.router.navigate(['/home'])
  }
}
