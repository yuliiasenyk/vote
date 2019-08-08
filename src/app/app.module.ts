import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VotesListComponent } from './votes/votes-list/votes-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { NewVoteComponent } from './votes/new-vote/new-vote.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from 'src/app/users/users-list/users-list.component';
import { UserItemComponent } from './users/users-list/user-item/user-item.component';
import { UserEditComponent } from 'src/app/users/user-profile/user-edit/user-edit.component';
import { VotesComponent } from './votes/votes.component';
import { VoteDetailsComponent } from './votes/vote-details/vote-details.component';
import { VoteEditComponent } from './votes/vote-edit/vote-edit.component';
import { ParticipantComponent } from './users/participant/participant.component';
import { PaginatorComponent } from 'src/app/share/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VotesListComponent,
    UserProfileComponent,
    NewVoteComponent,
    UsersComponent,
    UsersListComponent,
    UserItemComponent,
    UserEditComponent,
    VotesComponent,
    VoteDetailsComponent,
    VoteEditComponent,
    ParticipantComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
