import { useQuery, useQueryClient, UseQueryResult } from 'react-query';
import { axiosInstance } from '../utils/axiosInstance';
import { IUser } from '../types';
import constants from '../utils/constants';
import { AxiosError } from 'axios';

const getUsers = async (): Promise<IUser[]> => {
    const defaultData: IUser[] = [];
    const { data = defaultData } = await axiosInstance.get('/users/', { withCredentials: true });
    return data;
};

const useUsers = (): UseQueryResult<IUser[], AxiosError> => {
    return useQuery(constants.users, getUsers);
};

export function usePrefetchUsers(): void {
    const queryClient = useQueryClient();
    queryClient.prefetchQuery(constants.users, getUsers);
}

export default useUsers;
