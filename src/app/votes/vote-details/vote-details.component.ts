import {Component, Input, OnInit} from '@angular/core';
import {IVote, VoteState} from '../../models/vote-interface';
import {VoteDetailsService} from './vote-details.service';
import {VotesService} from '../votes.service';

@Component({
  selector: 'app-vote-details',
  templateUrl: './vote-details.component.html',
  styleUrls: ['./vote-details.component.scss'],
  providers: [VoteDetailsService],
})

export class VoteDetailsComponent implements OnInit {
  @Input() currentVote: IVote;
  editFieldOpen: boolean;
  public resultsOpen: boolean;
  editButton: 'Edit' | 'Cancel';
  public votes: IVote[];
  public voteState = VoteState;
  public voteResults: Array<any> = [];

  constructor( private voteDetailsService: VoteDetailsService,
               private votesService: VotesService) {}

  ngOnInit() {
    this.resultsOpen = false;
    this.editButton = 'Edit';
    this.votesService.behaviorSubjectToOpenForm.subscribe(v => {
      this.editFieldOpen = v; this.resultsOpen = false;
    });
    this.votesService.behaviorSubjectToCloseVoteInfo.subscribe(v => {
      this.editFieldOpen = v; this.resultsOpen = v;
    });
  }


  showResults(vote): void {
    this.voteDetailsService.calculateResults(vote)
      .subscribe(result => {
          this.voteResults = Object.entries(result);
          console.log('entries', this.voteResults);
        }
      );
    this.resultsOpen = !this.resultsOpen;
  }

  seeParticipantStats(): void {}

  editVoteFormOpenToggle(): void {
    this.editButton === 'Edit' ? this.editButton = 'Cancel' : this.editButton = 'Edit';
    this.editFieldOpen = !this.editFieldOpen;
  }
}
