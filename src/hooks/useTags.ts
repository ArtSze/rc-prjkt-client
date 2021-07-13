import { useQuery, UseQueryResult } from 'react-query';
import { axiosInstance } from '../utils/axiosInstance';
import { ITag } from '../types';

const getTags = async (): Promise<ITag[]> => {
    const defaultData: ITag[] = [];
    const { data = defaultData } = await axiosInstance.get('/tags/');
    return data;
};

const useTags = (): UseQueryResult<ITag[], Error> => {
    return useQuery('tags', getTags);
};

export default useTags;