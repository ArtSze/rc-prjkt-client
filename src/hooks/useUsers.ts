import { useQuery, UseQueryResult } from 'react-query';
import { axiosInstance } from '../utils/axiosInstance';
import { IUser } from '../types';
import constants from '../utils/constants';

const getUsers = async (): Promise<IUser[]> => {
    const defaultData: IUser[] = [];
    const { data = defaultData } = await axiosInstance.get('/users/');
    return data;
};

const useUsers = (): UseQueryResult<IUser[], Error> => {
    return useQuery(constants.users, getUsers);
};

export default useUsers;
