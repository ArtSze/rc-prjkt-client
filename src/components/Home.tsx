import React, { useState } from 'react';
import Filter, { QueryParams } from './filter/Filter';
import { useImmer } from 'use-immer';
import create from 'zustand';

import ProjectList from './ProjectList';
import useProjects from '../hooks/useProjects';
import Loading from './Loading';
import errorHandler from '../utils/errorHandler';
import { usePrefetchUsers } from '../hooks/useUsers';
import Nav from './Nav';
import { TTagFilter } from './filter/Filter';
import { TUserFilter } from './filter/Filter';

import { useStyles } from '../static/styles';
import { Collapse } from '@material-ui/core';
import { useEffect } from 'react';
import { ITag, IUser } from '../types';
import UserFilter from './filter/FilterPicker/UserFilter';

export interface AppState {
    tagFilter: TTagFilter;
    userFilter: TUserFilter;
    setTagFilter: (tags: ITag['value'][] | undefined) => void;
    setUserFilter: (rcId: IUser['rcId'] | undefined) => void;
}
export const useStore = create<AppState>((set) => ({
    tagFilter: undefined,
    userFilter: undefined,
    setTagFilter: (tags) => set({ tagFilter: tags }),
    setUserFilter: (rcId) => {
        set({
            userFilter: rcId,
        });
    },
}));

const Home = (): JSX.Element => {
    const [params, setParams] = useState<QueryParams>({});
    const [allProjects, setAllProjects] = useState<boolean>(true);
    const { data: projects, isSuccess, error, refetch } = useProjects(params);

    usePrefetchUsers();
    const classes = useStyles();

    if (error) {
        errorHandler(error);
    }

    useEffect(() => {
        refetch();
    }, [allProjects]);

    return (
        <div className={classes.root}>
            <Nav setParams={setParams} allProjects={allProjects} setAllProjects={setAllProjects} />
            <Collapse in={allProjects}>
                <Filter setParams={setParams} />
            </Collapse>
            {isSuccess && projects ? <ProjectList projects={projects} /> : <Loading />}
        </div>
    );
};

export default Home;
