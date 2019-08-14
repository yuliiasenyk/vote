import {Component, OnInit} from '@angular/core';
import {VotesService} from './votes.service';
import {IPagedVote, IVote} from '../models/vote-interface';
import {IPage} from '../models/page-interface';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

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
  isVoteData: boolean;

  constructor(
    private votesService: VotesService,
    private loginService: LoginService,
    private router: Router ,
  ) { }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
    this.votesService.getVotesData().subscribe((pagedVote: IPagedVote) => {
      this.isVoteData = pagedVote.data.length === 0 ? false : true;
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
    this.currentVote = vote;
  }

  pageSelected(page: number): void {
    if (page !== this.pageOfVotes.page) {
    console.log(`page ${page} is clicked`);
    }
  }
}
