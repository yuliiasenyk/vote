import {IPage} from './page-interface';

export interface IVote {
  id: number;
  name: string;
  description: string;
  state: 'draft' | 'active' | 'closed' | 'archived' | 'waiting' | 'deleted';
  options: any[];
  startDate?: string;
  endDate?: string;
}

export interface IPagedVote {
  data: IVote[];
  pageData: IPage;
}
