import { useQuery, UseQueryResult } from 'react-query';
import { IProject } from '../types';
import { axiosInstance } from '../utils/axiosInstance';
import constants from '../utils/constants';

const ping = async (): Promise<IProject[]> => {
    const { data } = await axiosInstance.get('/projects', { withCredentials: true });
    return data;
};

const usePing = (): UseQueryResult<IProject[], Error> => {
    return useQuery(constants.projects, ping, { retry: false });
};

export default usePing;
