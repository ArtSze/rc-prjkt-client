import { useQuery } from 'react-query';
import axios from 'axios';

const getUsers = async () => {
    console.log('entered getUser function');
    const { data } = await axios.get('http://localhost:4000/users/');
    console.log({ data });
    return data;
};

const useUsers = () => {
    return useQuery('users', getUsers);
};

export default useUsers;
