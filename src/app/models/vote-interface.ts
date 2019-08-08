export interface IVote {
  id: number;
  name: string;
  description: string;
  state: string;
  options: any[];
  startDate?: string;
  endDate?: string;
}
