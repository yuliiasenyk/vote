import {Component, Input, OnInit} from '@angular/core';
import {IVote} from '../../models/vote-interface';
import { VOTES } from 'src/app/mockes-data/votes';
import {VoteDetailsService} from './vote-details.service';

@Component({
  selector: 'app-vote-details',
  templateUrl: './vote-details.component.html',
  styleUrls: ['./vote-details.component.scss'],
  providers: [VoteDetailsService],
})

export class VoteDetailsComponent implements OnInit {
  @Input() currentVote: IVote;
  editFieldOpen: boolean;
  editButton: 'Edit' | 'Cancel';
  public votes: IVote[];

  constructor( private editVoteService: VoteDetailsService) { }

  ngOnInit() {
    this.editFieldOpen = false;
    this.editButton = 'Edit';
    this.votes = VOTES;
  }

  showResults(): void {
    this.editVoteService.calculateResults();
  }

  seeParticipantStats(): void {}

  editVoteFormOpen(): void {
    this.editButton === 'Edit' ? this.editButton = 'Cancel' : this.editButton = 'Edit';
    this.editFieldOpen = !this.editFieldOpen;
  }
}
