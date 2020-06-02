import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  currentUser: User;

  constructor(
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  public get currentUserValue(): User {
    return this.currentUser;
  }

  login(username: string, password: string): Boolean {
    if (username === 'game' && password === 'game') {
      this.currentUser = new User(username, password);
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }
}
//{"username":"game","password":"game"}