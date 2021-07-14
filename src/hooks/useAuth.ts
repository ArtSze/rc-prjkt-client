import { useQuery, UseQueryResult } from 'react-query';
import { IUser } from '../types';
import { axiosInstance } from '../utils/axiosInstance';

const getAuth = async (): Promise<IUser> => {
    const { data } = await axiosInstance.get('/auth');
    return data;
};

const useAuth = (): UseQueryResult<IUser, Error> => {
    return useQuery('auth', getAuth);
};

export default useAuth;
