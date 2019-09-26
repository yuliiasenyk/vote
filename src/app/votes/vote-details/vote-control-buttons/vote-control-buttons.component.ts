import {Component, Input, OnInit} from '@angular/core';
import {IVote, VoteState} from '../../../models/vote-interface';
import {VoteDetailsService} from '../vote-details.service';

@Component({
  selector: 'app-vote-control-buttons',
  templateUrl: './vote-control-buttons.component.html',
  styleUrls: ['./vote-control-buttons.component.scss']
})
export class VoteControlButtonsComponent implements OnInit {
  @Input() currentVote: IVote;

  public voteState = VoteState;

  constructor( private voteService: VoteDetailsService) { }

  ngOnInit() {}

  public deleteVoteClick(vote): void {
    this.voteService.deleteVote(vote).subscribe(result => console.log(result));
  }
}
