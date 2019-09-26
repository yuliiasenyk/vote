import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IVotesAndPaginationParams} from '../models/vote-interface';
import {ApiService} from '../api.service';
const initData = {data: [], pageData: {page: 0, totalPages: 0}};

@Injectable()
export class VotesService  {
  private behaviorSubject =  new BehaviorSubject<IVotesAndPaginationParams>(initData);
  public behaviorSubjectToCloseVoteInfo = new BehaviorSubject<boolean>(false);
  public behaviorSubjectToCheckParticipation = new BehaviorSubject<boolean>(null);
  public behaviorSubjectToOpenForm = new BehaviorSubject<boolean>(null);

  constructor(private api: ApiService) {
    this.getPage(1);
  }

  getVotesData(): Observable<IVotesAndPaginationParams> {
    return  this.behaviorSubject.asObservable();
  }

  getPage(page: number): void {
    this.api.get('/api/votes/' + page)
      .subscribe((result: IVotesAndPaginationParams) => {
        if (result) {
          this.behaviorSubject.next(result);
        }
      });
  }

  addNewVote() {}
}
