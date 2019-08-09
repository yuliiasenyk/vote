import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {IVote} from '../models/vote-interface';
import { VOTES} from '../mockes-data/votes';

@Injectable()

export class VotesService  {
  getVotesData(): Observable<IVote[]> {
    return of<IVote[]>(VOTES);
  }
}
