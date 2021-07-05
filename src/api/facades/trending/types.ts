export type Since = 'daily' | 'weekly' | 'monthly';

export interface IBuiltBy {
  username: string;
  url: string;
  avatar: string;
}

export interface IPopularRepository {
  repositoryName: string;
  description: string;
  url: string;
}

export interface IDevelopersQueryParams {
  since?: Since;
  prog_lang?: string;
}

export interface IRepository {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: Since;
  builtBy: IBuiltBy[];
}

export interface IReopsitoriesQueryParams extends IDevelopersQueryParams {
  spoken_language_code?: string;
}

export interface IDeveloper {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: Since;
  popularRepository: IPopularRepository;
}
