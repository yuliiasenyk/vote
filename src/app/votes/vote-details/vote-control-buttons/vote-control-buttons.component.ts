import {Component, Input, OnInit} from '@angular/core';
import {IVote, VoteState} from '../../../models/vote-interface';
import {VoteDetailsService} from '../vote-details.service';
import {VOTES, VOTES2} from '../../../mock-data/votes';

@Component({
  selector: 'app-vote-control-buttons',
  templateUrl: './vote-control-buttons.component.html',
  styleUrls: ['./vote-control-buttons.component.scss']
})
export class VoteControlButtonsComponent implements OnInit {
  @Input() currentVote: IVote;
  public votes: IVote[];
  public votes2: IVote[];
  public voteState = VoteState;

  constructor( private editVoteService: VoteDetailsService) { }

  ngOnInit() {
    this.votes =  VOTES;
    this.votes2 = VOTES2;
  }

  public deleteVote(vote): void {
    if (this.votes.includes(vote)) {
      this.votes.splice(this.votes.indexOf(vote), 1);
    }
    if (this.votes2.includes(vote)) {
      this.votes2.splice(this.votes2.indexOf(vote), 1);
    }
  }
}
