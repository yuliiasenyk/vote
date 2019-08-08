import {Component, OnInit} from '@angular/core';
import {VotesService} from './votes.service';
import {IVote} from '../models/vote-interface';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
  providers: [VotesService],
})
export class VotesComponent implements OnInit {
  votes: IVote[];
  currentVote: IVote;

  constructor(private votesService: VotesService) { }

  ngOnInit() {
    this.votesService.getVotesData().subscribe((votes: IVote[]) => {
      this.votes = votes;
      if (Array.isArray(votes) && votes.length) {
        this.currentVote = votes[0];
      }
    });
  }
  addNewVote() {
    console.log('addNewVote clicked');
  }
  voteSelected(vote: IVote): void {
    console.log(`details about ${vote.name} are open`);
  }

}
