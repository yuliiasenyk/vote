import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IVote} from '../../models/vote-interface';
import {VotesService} from '../votes.service';
import {VoteDetailsService} from '../vote-details/vote-details.service';

@Component({
  selector: 'app-votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.scss'],
})
export class VotesListComponent implements OnInit {
  @Input() votes: IVote[];
  @Output() voteSelected = new EventEmitter<IVote>();
  @Input() currentVote: IVote;
  public loggedInUser: string;

  constructor(private votesService: VotesService,
              private voteService: VoteDetailsService) {}

  public getLoggedInUser() {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('ACCESS_TOKEN')).username;
  }

  ngOnInit() {this.getLoggedInUser(); }

  rowClicked(vote: IVote): void {
    if (vote !== this.currentVote) {
      this.voteSelected.emit(vote);
      this.voteService.checkIfParticipated(vote, this.loggedInUser).subscribe(v => this.votesService.behaviorSubjectToCheckParticipation.next(v));
      this.votesService.behaviorSubjectToCloseVoteInfo.next(false);
    }
  }

}


