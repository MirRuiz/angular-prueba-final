import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  localstorageInfo: any = '';

  constructor(private router: Router) {}

  submit(username: string, password: string): boolean {
    if (username === 'Miriam' && password === 'angular') {
      return true;
    } else {
      return false;
    }
  }

  userLogged(): boolean {
    if (localStorage.getItem('authentication')) {
      return true;
    } else {
      return false;
    }
  }
  logout(): void {
    localStorage.removeItem('authentication');
    this.router.navigate(['/']);
  }

  getUserName(): any {
    if (localStorage.getItem('authentication')) {
      return (this.localstorageInfo = localStorage.getItem('authentication'));
    }
    return '';
  }
}
