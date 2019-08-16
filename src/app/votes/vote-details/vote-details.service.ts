import {Injectable, Input} from '@angular/core';
import {IVote} from '../../models/vote-interface';

@Injectable()

export class VoteDetailsService {
  @Input() currentVote: IVote;

  constructor() {
  }
  calculateResults(): void {
    console.log(`Results about ${this.currentVote.name}`);
  }
}
