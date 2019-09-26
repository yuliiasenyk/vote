import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import {PageNotFoundComponent} from 'src/app/share/page-not-found.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'votes'},
  {path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule'},
  {path: 'users', loadChildren: './users/users.module#UsersModule', canActivate: [AuthGuard]},
  {path: 'votes', loadChildren: './votes/votes.module#VotesModule', canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
