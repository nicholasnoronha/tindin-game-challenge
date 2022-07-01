import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/User'
import { TokenService } from 'src/app/services/auth/token.service';

const apiUrl = 'https://api-labs.tindin.com.br/auth'

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  authenticate(email: string, password: string) {
    return this.http
      .post<User>(apiUrl, { email, password })
  }

  isLogged() {
    return this.tokenService.hasToken()
  }
}
