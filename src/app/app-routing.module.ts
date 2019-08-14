import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from 'src/app/login/login.component';
import {UsersComponent} from 'src/app/users/users.component';
import {VotesComponent} from 'src/app/votes/votes.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'votes', component: VotesComponent, canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
