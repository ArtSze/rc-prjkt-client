import React, { useState } from 'react';
import Filter, { QueryParams } from './filter/Filter';
import create from 'zustand';

import ProjectList from './ProjectList';
import useProjects from '../hooks/useProjects';
import Loading from './Loading';
import errorHandler from '../utils/errorHandler';
import { usePrefetchUsers } from '../hooks/useUsers';
import Nav from './Nav';
import { TTagFilter, TOwnerFilter } from './filter/Filter';

import { useStyles } from '../static/styles';
import { Collapse } from '@material-ui/core';
import { useEffect } from 'react';
import { ITag, IUser } from '../types';
import ProjectFormAdd from './form/ProjectFormAdd';

export enum SortMethods {
    'Last Updated' = 'last updated',
    'First Updated' = 'first updated',
    'Last Created' = 'last created',
    'First Created' = 'first created',
    'Latest Batch' = 'latest batch',
    'Oldest Batch' = 'oldest batch',
}

export interface AppState {
    sortFilter: SortMethods;
    tagFilter: TTagFilter;
    ownerFilter: TOwnerFilter;
    addForm: boolean;
    setSortFilter: (sort: SortMethods) => void;
    setTagFilter: (tags: ITag['value'][] | undefined) => void;
    setOwnerFilter: (rcId: IUser['rcId'] | undefined) => void;
}
export const useStore = create<AppState>((set) => ({
    sortFilter: SortMethods['Last Updated'],
    tagFilter: undefined,
    ownerFilter: undefined,
    addForm: false,
    setSortFilter: (sort) => set({ sortFilter: sort }),
    setTagFilter: (tags) => set({ tagFilter: tags }),
    setOwnerFilter: (rcId) => {
        set({
            ownerFilter: rcId,
        });
    },
}));

const Home = (): JSX.Element => {
    const [params, setParams] = useState<QueryParams>({ sort: SortMethods['Last Updated'] });
    const [allProjects, setAllProjects] = useState<boolean>(true);
    const addForm = useStore((state) => state.addForm);

    const { data: projects, isSuccess, error, refetch } = useProjects(params);

    usePrefetchUsers({
        omitSelf: 'false',
    });

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
