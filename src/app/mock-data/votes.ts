import {IPagedVote, IVote, VoteState} from '../models/vote-interface';
import {PAGE_DATA, PAGE_DATA2} from 'src/app/mock-data/pages';

export const VOTES: IVote[] = [
  {
    id: 1,
    name: 'Fav animal',
    description: 'pick up your fav animal',
    state: VoteState.waiting,
    options: ['dog', 'hippo', 'ant', 'parrot'],
    startDate: new Date('December 17, 2018').toLocaleDateString(),
    endDate: new Date('December 17, 2019').toLocaleDateString(),
  },
  {
    id: 2,
    name: 'Fav number',
    description: 'pick up your fav number',
    state: VoteState.closed,
    options: [1, 3, 5],
    startDate: new Date('December 17, 2018').toLocaleDateString(),
    endDate: new Date('June 7, 2018').toLocaleDateString(),
  },
  {
    id: 3,
    name: 'Fav movies',
    description: 'pick up your fav movie',
    state: VoteState.draft,
    options: ['A', 'B', 'C'],
    startDate: new Date('December 17, 2018').toLocaleDateString(),
    endDate: 'ongoing',
  },
  {
    id: 4,
    name: 'Fav season',
    description: 'pick up your fav season',
    state: VoteState.archived,
    options: ['Spring', 'Summer', 'Fall', 'winter'],
    startDate: new Date('December 17, 2018').toLocaleDateString(),
    endDate: 'ongoing',
  },
  {
    id: 5,
    name: 'Fav color',
    description: 'pick up your fav color',
    state: VoteState.active,
    options: ['red', 'blue', 'green'],
    startDate: new Date().toLocaleDateString(),
    endDate: 'ongoing',
  },
];

export const VOTES2: IVote[] = [
  {
    id: 6,
    name: 'Colors',
    description: 'pick up your fav color',
    state: VoteState.active,
    options: ['yellow', 'violet', 'black'],
    startDate: new Date().toLocaleDateString(),
    endDate: 'ongoing',
  },
  {
    id: 7,
    name: 'Numbers',
    description: 'pick up your fav number',
    state: VoteState.closed,
    options: [10, 30, 50],
    startDate: new Date('December 17, 2018').toLocaleDateString(),
    endDate: new Date('June 7, 2018').toLocaleDateString(),
  },
  {
    id: 8,
    name: 'Movies',
    description: 'pick up your fav movie',
    state: VoteState.waiting,
    options: ['A', 'B', 'C'],
    startDate: new Date('December 17, 2018').toLocaleDateString(),
    endDate: new Date('December 17, 2019').toLocaleDateString(),
  },
];

export const INITIAL_VOTES_DATA: IPagedVote = {
  data: VOTES,
  pageData: PAGE_DATA,
};

export const SECOND_VOTES_DATA: IPagedVote = {
  data: VOTES2,
  pageData: PAGE_DATA2,
};
