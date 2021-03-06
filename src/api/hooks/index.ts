import { useQuery } from 'react-query';
import { repositoriesGet, developersGet, IReopsitoriesQueryParams, IDevelopersQueryParams } from '../facades/trending';

export const useRepositories = (params?: IReopsitoriesQueryParams) => useQuery(['repos', params], () => repositoriesGet(params));
export const useDevelopers = (params?: IDevelopersQueryParams) => useQuery(['developers', params], () => developersGet(params));
