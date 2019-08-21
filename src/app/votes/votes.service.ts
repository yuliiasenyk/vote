import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IPagedVote} from '../models/vote-interface';
import {INITIAL_VOTES_DATA, SECOND_VOTES_DATA} from '../mockes-data/votes';

@Injectable()
export class VotesService  {
  private behaviorSubject =  new BehaviorSubject<IPagedVote>(INITIAL_VOTES_DATA);
  getVotesData(): Observable<IPagedVote> {
    return  this.behaviorSubject.asObservable();
  }

getAnotherPage(page) {
    if (page === undefined || page === 1) {
      this.behaviorSubject.next(INITIAL_VOTES_DATA);
    } else {
      this.behaviorSubject.next(SECOND_VOTES_DATA);
    }
}

  addNewVote() {}
}
