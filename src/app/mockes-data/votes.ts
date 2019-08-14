import { IVote } from '../models/vote-interface';
import {IPagedVote} from '../models/vote-interface';

export const VOTES: IVote[] = [
  {
    id: 1,
    name: 'Fav color',
    description: 'pick up your fav color',
    state: 'active',
    options: ['red', 'blue', 'green'],
    startDate: new Date().toLocaleDateString(),
    endDate: 'ongoing',
  },
  {
    id: 2,
    name: 'Fav number',
    description: 'pick up your fav number',
    state: 'closed',
    options: [1, 3, 5],
    startDate: new Date('December 17, 2018').toLocaleDateString(),
    endDate: new Date('June 7, 2018').toLocaleDateString(),
  },
  {
    id: 3,
    name: 'Fav movies',
    description: 'pick up your fav movie',
    state: 'active',
    options: ['A', 'B', 'C'],
    startDate: new Date('December 17, 2018').toLocaleDateString(),
    endDate: 'ongoing',
  },
  {
    id: 4,
    name: 'Fav season',
    description: 'pick up your fav season',
    state: 'draft',
    options: ['Spring', 'Summer', 'Fall', 'winter'],
    startDate: new Date('December 17, 2018').toLocaleDateString(),
    endDate: '',
  },
]

export const INITIAL_VOTES_DATA: IPagedVote = {
  data: [],
  pageData: {page: 1, totalPages: 1},
};
