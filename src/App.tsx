import React from 'react';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import { useImmer } from 'use-immer';

export type TStatusFilter = {
    active: boolean;
    inactive: boolean;
};

type TTagFilter = { tag: string[] };
type TUserFilter = { rcId: number };
export type Filter = TTagFilter | TUserFilter;

type QueryParams = {
    // if statusFilter.active is true, return active projects
    // if statusFilter.active is false, return inactive projects
    // if statusFilter.active is true and Checkboxes.inactive is true, do not send as a query param and retrieve all projects
    active?: boolean;
    tag?: TTagFilter;
    rcId?: TUserFilter;
};

const App = (): JSX.Element => {
    const [statusFilter, setStatusFilter] = useImmer({
        active: true,
        inactive: false,
    } as TStatusFilter);

    return (
        <div>
            <h1>RC-Prjkt</h1>
            <Nav statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            <ProjectList />
        </div>
    );
};

export default App;
