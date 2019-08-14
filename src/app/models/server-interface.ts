import { Observable} from 'rxjs';

export interface IServer {
 getData(url: string): Observable<any>;
 post?(url: string, data: any): void;
}
