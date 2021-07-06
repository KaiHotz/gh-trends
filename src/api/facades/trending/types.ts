import { Since, LangCode, ProgLang } from '../../types';

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
  prog_lang?: ProgLang;
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
  spoken_language_code?: LangCode;
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
