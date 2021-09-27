import { Component } from '@angular/core';
import { UserRegistration } from '../model/modelEntity';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  model: UserRegistration = { username: '', password: '' };

  loginError: boolean = false;

  constructor(private router: Router, private service: AuthService) {}

  submit() {
    if (this.service.submit(this.model.username, this.model.password)) {
      localStorage.setItem('authentication',this.model.username);
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }
}
