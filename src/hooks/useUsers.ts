import { useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';
import { IUser } from '../types';

const getUsers = async () => {
    console.log('entered getUser function');
    const { data } = await axios.get('http://localhost:4000/users/');
    console.log({ data });
    return data;
};

const useUsers = (): UseQueryResult<IUser[], Error> => {
    return useQuery('users', getUsers);
};

export default useUsers;
