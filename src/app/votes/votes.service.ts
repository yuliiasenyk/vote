import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IPagedVote} from '../models/vote-interface';
import {INITIAL_VOTES_DATA} from '../mockes-data/votes';

@Injectable()
export class VotesService  {
  private behaviorSubject =  new BehaviorSubject<IPagedVote>(INITIAL_VOTES_DATA);
  getVotesData(votes): Observable<IPagedVote> {
    return  this.behaviorSubject.asObservable();
    this.behaviorSubject.next(votes);
  }

  addNewVote() {}
}
