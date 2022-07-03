import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
  }

  handleLoginClick(): void {
    this.router.navigateByUrl('login')
  }

  handleLogoutClick(): void {
    this.tokenService.removeToken()
    this.router.navigateByUrl('')
  }

  handleLogoClick(): void {
    if(this.tokenService.hasToken()) {
      this.router.navigateByUrl('home/games')
    } else {
      this.router.navigateByUrl('')
    }
  }

  isAuthenticated() {
    return this.tokenService.hasToken()
  }
}
