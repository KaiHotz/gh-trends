import { defineMessages, MessageDescriptor } from 'react-intl';

export const createDictionary = <U extends Record<string | number, string>, K extends keyof U, V extends U[K]>(
  base: string,
  messages: U,
) => {
  const entries = Object.entries(messages) as Array<[K, V]>;
  const dictionary = entries.reduce((dict, [key, value]) => {
    dict[key] = {
      id: `${base}_${key}`,
      defaultMessage: value,
    };

    return dict;
  }, {} as Record<K, MessageDescriptor>);

  return defineMessages<K, MessageDescriptor, typeof dictionary>(dictionary);
};
