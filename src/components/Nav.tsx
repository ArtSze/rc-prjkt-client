import React from 'react';
import Sort from './nav/Sort';
import StatusFilter from './nav/StatusFilter';
import Filter from './nav/Filter';
import { useImmer } from 'use-immer';
import { useEffect } from 'react';

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
    setParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

const Nav = ({ setParams }: NavProps): JSX.Element => {
    const [statusFilter, setStatusFilter] = useImmer({
        active: true,
        inactive: false,
    } as TStatusFilter);
    const [tagFilter, setTagFilter] = useImmer(undefined as TTagFilter);
    const [userFilter, setUserFilter] = useImmer(undefined as TUserFilter);

    useEffect(parseParams, [statusFilter, tagFilter, userFilter]);

    function parseParams() {
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
        setParams(params);
    }

    return (
        <nav>
            <h2>Nav</h2>
            <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            <Filter
                tagFilter={tagFilter}
                setTagFilter={setTagFilter}
                userFilter={userFilter}
                setUserFilter={setUserFilter}
            />
            <Sort />
        </nav>
    );
};

export default Nav;
