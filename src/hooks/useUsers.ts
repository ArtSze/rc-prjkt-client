import { useQuery } from 'react-query';
import axios from 'axios';

const getUsers = async () => {
    const { data } = await axios.get('http://localhost:4000/users/');
    return data;
};

const useUsers = () => {
    return useQuery('users', getUsers);
};

export default useUsers;
