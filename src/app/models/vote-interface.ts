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
  startDate?: string;
  endDate?: string;
}

export interface IPagedVote {
  data: IVote[];
  pageData: IPage;
}
