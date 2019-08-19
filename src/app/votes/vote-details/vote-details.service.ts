import {Injectable, Input} from '@angular/core';
import {IVote} from '../../models/vote-interface';

@Injectable()

export class VoteDetailsService {
  constructor() {
  }
  calculateResults(): void {
    console.log(`Results don't exist yet`);
  }

}
