import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  username: string = '';

  constructor(public service: AuthService) {
    this.username = this.service.getUserName();
  }
  ngOnInit(): void {}
}
