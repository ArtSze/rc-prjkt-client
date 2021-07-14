import React from 'react';
import Sort from './nav/Sort';
import StatusFilter from './nav/StatusFilter';
import Filter from './nav/Filter';
import { useImmer } from 'use-immer';
import { useEffect } from 'react';
import { IProject, ITag, IUser } from '../types';
import { axiosInstance } from '../utils/axiosInstance';
import { setParams, paramsSerializer } from '../utils/paramParser';

export type TStatusFilter = {
    active: boolean;
    inactive: boolean;
};

export type TTagFilter = ITag['value'][] | undefined;
export type TUserFilter = IUser['rcId'] | undefined;

export type QueryParams = {
    status?: boolean;
    tags?: TTagFilter;
    user?: TUserFilter;
};

interface NavProps {
    setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

//TODO: add apply button

<<<<<<< HEAD
=======
function setParams(statusFilter: TStatusFilter, tagFilter: TTagFilter, userFilter: TUserFilter) {
    const params = {} as QueryParams;
    if (!statusFilter.active === statusFilter.inactive) {
        if (statusFilter.active === true) {
            params.status = true;
        }
        if (statusFilter.inactive === true) {
            params.status = false;
        }
    }
    if (tagFilter) {
        params.tags = tagFilter;
    }
    if (userFilter) {
        params.user = userFilter;
    }
    // console.table({ params });
    return params;
}

>>>>>>> 0884ad6fb0ec85f5c206f0f2257a7866128e7cad
const Nav = ({ setProjects }: NavProps): JSX.Element => {
    const [statusFilter, setStatusFilter] = useImmer<TStatusFilter>({
        active: true,
        inactive: false,
    });
    const [tagFilter, setTagFilter] = useImmer<TTagFilter>(undefined);
    const [userFilter, setUserFilter] = useImmer<TUserFilter>(undefined);

    useEffect(() => {
        async function fetchProjects() {
            const params = setParams(statusFilter, tagFilter, userFilter);
            try {
                const response: IProject[] = (await axiosInstance.get('/projects', { params, paramsSerializer })).data;
                // console.log(response);
                setProjects(response);
            } catch (e) {
                // TODO: handle error
                console.log(e);
            }
        }
        fetchProjects();
    }, [statusFilter, tagFilter, userFilter]);

    return (
        <nav>
            <h2>Nav</h2>
            <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            <hr style={{ marginBottom: '20px', marginTop: '20px' }} />
            <Filter
                tagFilter={tagFilter}
                setTagFilter={setTagFilter}
                userFilter={userFilter}
                setUserFilter={setUserFilter}
            />
            <hr style={{ marginBottom: '20px', marginTop: '20px' }} />
            <Sort />
            <hr style={{ marginBottom: '20px', marginTop: '20px' }} />
        </nav>
    );
};

export default Nav;
