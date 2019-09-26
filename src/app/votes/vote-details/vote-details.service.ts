import {Injectable } from '@angular/core';
import {ApiService} from '../../api.service';
import {IVote} from '../../models/vote-interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VoteDetailsService {
  constructor(private api: ApiService) {}

  calculateResults(vote: IVote): Observable<{}> {
    return this.api.get('/api/vote/results/' + vote.name);
  }

  editVote(data, vote: IVote) {
    console.log('DATA in VOte details', data);
    console.log('vote name', vote.name);
    if (vote.name) {
      return this.api.put('/api/vote/edit/' + vote.name, data).subscribe(result => console.log(result));
    } else {
      return this.api.post('/api/vote/addNew', data).subscribe(result => console.log(result));
    }
  }

  deleteVote(vote: IVote): Observable<{}> {
    return this.api.delete('/api/vote/delete/' + vote.name);
  }

  addNewResult(body): Observable<any> {
   return this.api.put('/api/vote/newResponse', body);
  }

  checkIfParticipated(vote, username): Observable<boolean> {
    return this.api.get('/api/vote/participated/' + vote.name + '/' + username);
  }
}
