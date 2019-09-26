import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VotesListComponent } from './votes-list/votes-list.component';
import { VotesComponent } from './votes.component';
import { VoteDetailsComponent } from './vote-details/vote-details.component';
import { FormToVoteComponent } from './vote-details/form-to-vote/form-to-vote.component';
import { FormToEditVoteComponent } from './vote-details/form-to-edit-vote/form-to-edit-vote.component';
import { VoteControlButtonsComponent } from './vote-details/vote-control-buttons/vote-control-buttons.component';
import { SharedModule } from '../share/shared.module';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: VotesComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    VotesListComponent,
    VotesComponent,
    VoteDetailsComponent,
    FormToVoteComponent,
    FormToEditVoteComponent,
    VoteControlButtonsComponent,
  ],
  exports: [
    VotesListComponent,
    VotesComponent,
    VoteDetailsComponent,
    FormToVoteComponent,
    FormToEditVoteComponent,
    VoteControlButtonsComponent,
    RouterModule,
  ],
  providers: [],

})
export class VotesModule {}
