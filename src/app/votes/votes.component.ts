import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {VotesService} from './votes.service';
import {IVotesAndPaginationParams, IVote, VoteState} from '../models/vote-interface';
import {IPage} from '../models/page-interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
  providers: [VotesService],
})
export class VotesComponent implements OnInit, OnDestroy {
  votes: IVote[];
  currentVote: IVote;
  pageParams: IPage;

  public dataSubscription: Subscription;

  constructor(private votesService: VotesService) { }

  ngOnInit() {
    this.dataSubscription = this.votesService.getVotesData()
      .subscribe((pageWithVotes: IVotesAndPaginationParams) => {
        this.votes = pageWithVotes.data;
        this.pageParams = pageWithVotes.pageData;
      });
  }

  pageSelected(page: number): void {
    this.currentVote = null;
    if (page !== this.pageParams.page) {
      this.votesService.getPage(page);
    }
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  addNewVoteClicked() {
    this.currentVote = {name: '', description: '', options: [], id: 1, state: VoteState.draft, participants: []};
    this.votesService.behaviorSubjectToOpenForm.next(true);
    console.log(this.currentVote);
  }

  voteSelected(vote: IVote): void {
    this.currentVote = vote;
  }

}
