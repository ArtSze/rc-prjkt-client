import React from 'react';
import Sort from './nav/Sort';
import TagFilter from './nav/TagFilter';
import UserFilter from './nav/UserFilter';
import UserProjects from './nav/UserProjects';
import StatusFilter from './nav/StatusFilter';
import { TStatusFilter } from '../App';
import { Updater } from 'use-immer';

interface NavProps {
    statusFilter: TStatusFilter;
    setStatusFilter: Updater<TStatusFilter>;
}

const Nav = ({ statusFilter, setStatusFilter }: NavProps): JSX.Element => {
    return (
        <nav>
            <h2>Nav</h2>
            <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            <Sort />
            <TagFilter />
            <UserFilter />
            <UserProjects />
        </nav>
    );
};

export default Nav;
