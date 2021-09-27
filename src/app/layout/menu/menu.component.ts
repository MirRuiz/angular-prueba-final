import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  username: string = '';

  constructor(public service: AuthService) {}

  ngOnInit(): void {
    this.service.userLogged();
    this.checkUsername();
  }
  checkUsername() {
    this.username = this.service.getUserName();
  }
}
