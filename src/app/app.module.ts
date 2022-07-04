import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { GameCardComponent } from './components/game-card/game-card.component'

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerComponent } from './components/manager/manager.component';
import { HighlightComponent } from './components/tela-inicial/highlight/highlight.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FilterByTitle } from './components/manager/filter-by-title.pipe';
import { FormatArrayIntoStringPipe } from './components/game-details/format-array.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    HeaderComponent,
    FooterComponent,
    GameCardComponent,
    PageNotFoundComponent,
    LoginFormComponent,
    ManagerComponent,
    HighlightComponent,
    GameDetailsComponent,
    LoadingComponent,
    FilterByTitle,
    FormatArrayIntoStringPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
