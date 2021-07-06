import { Since, LangCode, ProgLang } from '../../api';

export interface ITrendingState {
  since: Since;
  prog_lang?: ProgLang;
  spoken_language_code?: LangCode;
}
