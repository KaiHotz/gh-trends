import { Since } from '../../api/facades/trending';

export interface ITrendingState {
  since: Since;
  prog_lang: string;
  spoken_language_code: string;
}
