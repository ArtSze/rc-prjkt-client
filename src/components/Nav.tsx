import React from 'react';
import Sort from './nav/Sort';
import StatusFilter from './nav/StatusFilter';
import Filter from './nav/Filter';
import { useImmer } from 'use-immer';
import { useEffect } from 'react';
<<<<<<< Updated upstream
import { IProject } from '../types';
import axios from 'axios';
=======
import { fetchProjects } from '../RCPrjkts';
>>>>>>> Stashed changes

export type TStatusFilter = {
    active: boolean;
    inactive: boolean;
};

export type TTagFilter = string[] | undefined;
export type TUserFilter = number | undefined;

export type QueryParams = {
    /**
     * if statusFilter.active is true, return active projects
     * if statusFilter.active is false, return inactive projects
     * if statusFilter.active is true and statusFilter.inactive is true, do not send as a query param and retrieve all projects
     */
    status?: boolean;
    tag?: TTagFilter;
    user?: TUserFilter;
};

interface NavProps {
    setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

//TODO: add apply button

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
        params.tag = tagFilter;
    }
    if (userFilter) {
        params.user = userFilter;
    }
    console.table({ params });
    return params;
}

const Nav = ({ setProjects}: NavProps): JSX.Element => {
    const [statusFilter, setStatusFilter] = useImmer<TStatusFilter>({
        active: true,
        inactive: false,
    });
    const [tagFilter, setTagFilter] = useImmer<TTagFilter>(undefined);
    const [userFilter, setUserFilter] = useImmer<TUserFilter>(undefined);

    useEffect(() => {
        async function fetchProjects() {
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
                params.tag = tagFilter;
            }
            if (userFilter) {
                params.user = userFilter;
            }
            console.table({ params });
            try {
                const response: IProject[] = (await axios.get('/projects', { params })).data;
                console.log(response);
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
