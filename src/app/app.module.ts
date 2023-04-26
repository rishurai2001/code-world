import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { LogoutComponent } from './core/logout/logout.component';

import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { ContestsComponent } from './components/contests/contests.component';
import { PracticeComponent } from './components/practice/practice.component';
import { HomeComponent } from './components/home/home.component';
import { ProblemComponent } from './components/problem/problem.component';
import { NavbarComponent } from './core/navbar/navbar.component';
// import { CodeEditorComponent } from './components/code-editor/code-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ContestsComponent,
    PracticeComponent,
    HomeComponent,
    ProblemComponent,
   
    CodeEditorComponent,
        NavbarComponent,
    // CodeEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
