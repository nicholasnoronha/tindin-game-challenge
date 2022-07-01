import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/auth/login.service'
import { User } from '../../interfaces/User'
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  userAuth: User;
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private authService: LoginService,
    private tokenService: TokenService,
    private router: Router  
  ) { 
    // if(this.tokenService.hasToken()) this.router.navigateByUrl('home/games')
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }

  login(): void {
    const email = this.loginForm.get('email')?.value
    const password = this.loginForm.get('password')?.value
    
    this.authService
      .authenticate(email, password)
      .subscribe(res => {
        console.log(res.token)
        this.tokenService.setToken(res.token)
        this.router.navigateByUrl('home/games')
      }, () => {
        this.loginForm.reset();
        this.userNameInput.nativeElement.focus()
      })
  }
}