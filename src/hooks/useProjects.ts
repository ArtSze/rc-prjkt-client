import { useQuery, UseQueryResult } from 'react-query';
import { axiosInstance } from '../utils/axiosInstance';
import { IProject } from '../types';
import constants from '../utils/constants';
import { paramsSerializer } from '../utils/paramParser';
import { QueryParams } from '../components/nav/Nav';

const getProjects = async (params: QueryParams): Promise<IProject[]> => {
    const defaultData: IProject[] = [];
    const { data = defaultData } = await axiosInstance.get('/projects/', { params, paramsSerializer });
    return data;
};
const useProjects = (params: QueryParams): UseQueryResult<IProject[], Error> => {
    return useQuery([constants.projects, params], () => getProjects(params), { keepPreviousData: true });
};

export default useProjects;
