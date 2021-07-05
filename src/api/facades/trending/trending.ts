import qs from 'qs';
import { httpClient } from '../../../services/httpClient';
import { IReopsitoriesQueryParams, IRepository, IDevelopersQueryParams, IDeveloper } from './types';

export const repositoriesGet = async (params?: IReopsitoriesQueryParams): Promise<IRepository[]> => {
  const query = params?.prog_lang ? `/${params?.prog_lang}` : `${qs.stringify(params, { addQueryPrefix: true })}`;
  const { data } = await httpClient.get(`/repositories${query}`);

  return data;
};

export const developersGet = async (params?: IDevelopersQueryParams): Promise<IDeveloper[]> => {
  const query = params?.prog_lang ? `/${params?.prog_lang}` : `${qs.stringify(params, { addQueryPrefix: true })}`;
  const { data } = await httpClient.get(`/developers${query}`);

  return data;
};
