import {IPage} from './page-interface';

export enum VoteState {
  draft = 'draft',
  active = 'active',
  closed = 'closed',
  archived = 'archived',
  waiting = 'waiting',
}

export interface IVote {
  id: number;
  name: string;
  description: string;
  state: VoteState;
  options: any[];
  start?: string;
  end?: string;
  results?: object;
  participants: string[];
}

export interface IVotesAndPaginationParams {
  data: IVote[];
  pageData: IPage;
}
