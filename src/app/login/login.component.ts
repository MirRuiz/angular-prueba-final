import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../model/modelEntity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: UserRegistration = { username: '', password: '' };
  authentication: UserRegistration = {
    username: 'Miriam',
    password: 'angular',
  };
  loginError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  submit() {
    console.log(this.model);
    if (
      this.model.username === this.authentication.username &&
      this.model.password === this.authentication.password
    ) {
      localStorage.setItem(
        'authentication',
        JSON.stringify(this.authentication)
      );
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }
}
