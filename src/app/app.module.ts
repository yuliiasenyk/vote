import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VotesListComponent } from './votes/votes-list/votes-list.component';
import { UserProfileComponent } from 'src/app/users/user-profile/user-profile.component';
import { NewVoteComponent } from 'src/app/votes/new-vote/new-vote.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from 'src/app/users/users-list/users-list.component';
import { UserEditComponent } from 'src/app/users/user-profile/user-edit/user-edit.component';
import { VotesComponent } from './votes/votes.component';
import { VoteDetailsComponent } from './votes/vote-details/vote-details.component';
import { ParticipantComponent } from './users/participant/participant.component';
import { PaginatorComponent } from 'src/app/share/paginator/paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VotesListComponent,
    UserProfileComponent,
    NewVoteComponent,
    UsersComponent,
    UsersListComponent,
    UserEditComponent,
    VotesComponent,
    VoteDetailsComponent,
    ParticipantComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
