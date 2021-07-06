import qs from 'qs';
import { omit } from 'lodash';
import { httpClient } from '../../../services/httpClient';
import { IReopsitoriesQueryParams, IRepository, IDevelopersQueryParams, IDeveloper } from './types';

export const repositoriesGet = async (params?: IReopsitoriesQueryParams): Promise<IRepository[]> => {
  const queryParams = qs.stringify(omit(params, 'prog_lang'), { addQueryPrefix: true });
  const queryUrl = params?.prog_lang ? `/${params?.prog_lang}` : `${queryParams}`;
  const { data } = await httpClient.get(`/repositories${queryUrl}`);

  return data;
};

export const developersGet = async (params?: IDevelopersQueryParams): Promise<IDeveloper[]> => {
  const queryParams = qs.stringify(omit(params, 'prog_lang'), { addQueryPrefix: true });
  const queryUrl = params?.prog_lang ? `/${params?.prog_lang}` : `${queryParams}`;
  const { data } = await httpClient.get(`/developers${queryUrl}`);

  return data;
};
