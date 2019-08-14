import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IPagedVote} from '../models/vote-interface';
import { VOTES} from '../mockes-data/votes';
import {PAGE_DATA} from '../mockes-data/pages';

@Injectable()
export class VotesService  {
  getVotesData(): Observable<IPagedVote> {
    return new BehaviorSubject<IPagedVote>({
      pageData: PAGE_DATA,
      data: VOTES,
    } );
  } };
