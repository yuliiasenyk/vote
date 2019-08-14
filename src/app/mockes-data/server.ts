import {IServer} from '../models/server-interface';
import {Observable} from 'rxjs';

export class MockedServer{
  static getData(url: string){
return url;
  } ;
}
