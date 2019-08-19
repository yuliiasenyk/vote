import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IVote} from '../../models/vote-interface';

@Component({
  selector: 'app-vote-details',
  templateUrl: './vote-details.component.html',
  styleUrls: ['./vote-details.component.scss']
})
export class VoteDetailsComponent implements OnInit, OnChanges {
  @Input() currentVote: IVote;
  constructor() { }
  ngOnInit() {}

  ngOnChanges(): void {
    console.log('Votes details', this.currentVote);
  }
//   seeResults(): void {
//     console.log('Votes results', this.currentVote);
//   }
//   addNewOption(): void {
//   console.log('new option input should be added');
// }

}
