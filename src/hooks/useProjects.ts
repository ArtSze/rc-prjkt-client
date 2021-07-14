import { useQuery, UseQueryResult } from 'react-query';
import { axiosInstance } from '../utils/axiosInstance';
import { IProject } from '../types';
import constants from '../utils/constants';

const getProjects = async (): Promise<IProject[]> => {
    const defaultData: IProject[] = [];
    const { data = defaultData } = await axiosInstance.get('/projects/');
    return data;
};

const useProjects = (): UseQueryResult<IProject[], Error> => {
    return useQuery(constants.projects, getProjects);
};

export default useProjects;
