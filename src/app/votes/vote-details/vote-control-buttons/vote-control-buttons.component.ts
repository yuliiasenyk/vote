import {Component, Input, OnInit} from '@angular/core';
import {IVote} from '../../../models/vote-interface';
import {VoteDetailsService} from '../vote-details.service';
import {VOTES} from '../../../mockes-data/votes';

@Component({
  selector: 'app-vote-control-buttons',
  templateUrl: './vote-control-buttons.component.html',
  styleUrls: ['./vote-control-buttons.component.scss']
})
export class VoteControlButtonsComponent implements OnInit {
  @Input() currentVote: IVote;
  public votes: IVote[];

  constructor( private editVoteService: VoteDetailsService) { }

  ngOnInit() {
    this.votes = VOTES;
  }

}
