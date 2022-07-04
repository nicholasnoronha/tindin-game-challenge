import { User } from './../../interfaces/User';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const key = 'authToken'
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private userSubject = new BehaviorSubject(null)
  constructor() {
    this.hasToken() && this.notify()
  }

  hasToken() {
    return !!this.getToken()
  }

  setToken(authToken: string): void {
    window.localStorage.setItem(key, authToken)
  }

  getToken(): string | [] {
    return window.localStorage.getItem(key) || []
  }

  removeToken() {
    window.localStorage.removeItem(key)
  }

  notify() {
    console.log(this.getToken())
    // this.userSubject.next()
  }
}
