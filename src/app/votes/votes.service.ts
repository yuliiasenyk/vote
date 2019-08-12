import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {IPagedVote, IVote} from '../models/vote-interface';
import {IPage} from '../models/page-interface';
import { VOTES} from '../mockes-data/votes';
import {PAGE_DATA} from '../mockes-data/pages';

@Injectable()

export class VotesService  {
  getVotesData(): Observable<IPagedVote> {
    return of<IPagedVote>({
      pageData: PAGE_DATA,
      data: VOTES,
    });
  }

}
