import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {of} from 'rxjs';
import {IPagedVote, IVote} from '../models/vote-interface';
import {IPage} from '../models/page-interface';
import { VOTES} from '../mockes-data/votes';
import {PAGE_DATA} from '../mockes-data/pages';
import { INITIAL_VOTES_DATA } from 'src/app/mockes-data/votes';

@Injectable()
export class VotesService  {
 // public getVoteData() : BehaviorSubject<IPagedVote>(INITIAL_VOTES_DATA);
 //   this.getVoteData().asObservable();

  getVotesData(): Observable<IPagedVote> {
    return of<IPagedVote>({
      pageData: PAGE_DATA,
      data: VOTES,
    });
  };
}
