import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { LogoutComponent } from './core/logout/logout.component';
import { ContestsComponent } from './components/contests/contests.component'
import { PracticeComponent } from './components/practice/practice.component';
import { HomeComponent } from './components/home/home.component';
import { ProblemComponent } from './components/problem/problem.component';
import { ContestComponent } from './components/contest/contest.component';
 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'contests', component: ContestsComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'contests/:contestId', component: ContestComponent },
  { path: 'contests/:contestId/:problemId', component: ProblemComponent },
  { path: 'practice/:problemId', component: ProblemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
