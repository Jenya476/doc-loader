export interface Doc {
  title: string;
  description: string;
  link: string;
  status: DocStatus;
  completion: number;
  docType: string;
  isLock: boolean;
  filter: DocFilter;
}

export type DocStatus = 'pending' | 'ready';

export type DocFilter = 'all' | 'validation' | 'incorporation' | 'launch' | 'fundraising';
