import {Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';
import {IVote} from '../../models/vote-interface';


@Component({
  selector: 'app-votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.scss'],
})
export class VotesListComponent implements OnInit, OnChanges {
  @Input() votes: IVote[];
  @Output() voteSelected = new EventEmitter<IVote>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    console.log('Votes table', this.votes);
  }
  rowClicked(vote: IVote): void {
    this.voteSelected.emit(vote);
  }

}


