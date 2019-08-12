import {Component, OnInit} from '@angular/core';
import {VotesService} from './votes.service';
import {IPagedVote, IVote} from '../models/vote-interface';
import {IPage} from '../models/page-interface';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
  providers: [VotesService],
})
export class VotesComponent implements OnInit {
  votes: IVote[];
  currentVote: IVote;
  pageOfVotes: IPage;

  constructor(private votesService: VotesService) { }

  ngOnInit() {
    this.votesService.getVotesData().subscribe((pagedVote: IPagedVote) => {
      this.votes = pagedVote.data;
      this.pageOfVotes = pagedVote.pageData;
      if (Array.isArray(this.votes) && this.votes.length) {
        this.currentVote = this.votes[0];
      }
    });
  }

  addNewVote() {
    console.log('addNewVote clicked');
  }

  voteSelected(vote: IVote): void {
    console.log(`details about ${vote.name} are open`);
  }

  pageSelected(page: number): void {
console.log('page is clicked');
  }
}
