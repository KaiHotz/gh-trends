import { createDictionary } from '../../utils';

export const messages = createDictionary('trending', {
  title: 'Trending',
  description: 'See what the GitHub community is most excited about {value}.',

  daily: 'today',
  weekly: 'this week',
  monthly: 'this month',
});
