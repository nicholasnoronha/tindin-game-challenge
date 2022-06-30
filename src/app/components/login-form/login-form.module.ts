import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ LoginFormComponent ],
  imports: [ ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
})
export class AppModule { }
