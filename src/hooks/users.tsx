import { useState, useEffect } from 'react';
import axios from 'axios';
import { TProject } from '../App';

export interface IUser {
    rcId: number;
    first_name: string;
    last_name: string;
    zulip_id: number;
    image_path: string;
    batchEndDate: Date;
    batch: string;
    ownedProjects: Array<TProject>;
    collabProjects: Array<TProject>;
}

function useUsers(initialState = []) {
    const [users, setUsers] = useState<IUser[]>(initialState);

    useEffect(() => {
        getUsers();
    });

    async function getUsers() {
        try {
            const response: IUser[] = (await axios.get('/users')).data;
            console.log(response);
            setUsers(response);
        } catch (e) {
            // TODO: handle error
            console.log(e);
        }
    }
    return users;
}

export default useUsers;
