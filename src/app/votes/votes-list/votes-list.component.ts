import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IVote} from '../../models/vote-interface';


@Component({
  selector: 'app-votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.scss'],
})
export class VotesListComponent implements OnInit {
  @Input() votes: IVote[];
  @Output() voteSelected = new EventEmitter<IVote>();
  @Input() currentVote: IVote;

  constructor() {}

  ngOnInit() {}

  rowClicked(vote: IVote): void {
    this.voteSelected.emit(vote);
  }


}


