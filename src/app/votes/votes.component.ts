import {Component, OnInit, OnDestroy} from '@angular/core';
import {VotesService} from './votes.service';
import {IPagedVote, IVote} from '../models/vote-interface';
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
  pageOfVotes: IPage;
  public dataSubscription: Subscription;

  constructor(private votesService: VotesService) { }

  ngOnInit() {

   this.dataSubscription = this.votesService.getVotesData().subscribe((pagedVote: IPagedVote) => {
      this.votes = pagedVote.data;
      this.pageOfVotes = pagedVote.pageData;
      if (Array.isArray(this.votes) && this.votes.length) {
        this.currentVote = this.votes[0];
      }
    });
  }

  addNewVote() {
    this.votesService.addNewVote();
  }

  voteSelected(vote: IVote): void {
    this.currentVote = vote;
  }

  pageSelected(page: number): void {
    if (page !== this.pageOfVotes.page) {
      this.votesService.getPage(page);
    }
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
