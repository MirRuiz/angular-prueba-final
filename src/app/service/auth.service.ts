import { Injectable } from '@angular/core';
// import { UserRegistration } from '../model/modelEntity';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  submit(username: string, password: string): boolean {

    if (username === 'Miriam' && password === 'angular') {
     
      return true;
    } else {
      return false;
    }
  }
}
