import { useQuery, UseQueryResult } from 'react-query';
import { axiosInstance } from '../utils/axiosInstance';
import { ITag } from '../types';
import constants from '../utils/constants';

const getTags = async (): Promise<ITag[]> => {
    const defaultData: ITag[] = [];
    const response = await axiosInstance.get('/tags/', { withCredentials: true });
    console.log({ response });
    const data = response.data || defaultData;
    return data;
};

const useTags = (): UseQueryResult<ITag[], Error> => {
    const query = useQuery(constants.tags, getTags) as UseQueryResult<ITag[], Error>;
    console.log({ query });
    return query;
};

export default useTags;
