import React, { useState } from 'react';
import Filter, { QueryParams } from './filter/Filter';
import create from 'zustand';

import ProjectList from './ProjectList';
import useProjects from '../hooks/useProjects';
import Loading from './Loading';
import { usePrefetchUsers } from '../hooks/useUsers';
import Nav from './Nav';
import { TTagFilter, TOwnerFilter } from './filter/Filter';

import { useStyles } from '../static/styles';
import { Collapse, Snackbar } from '@material-ui/core';
import { useEffect } from 'react';
import { ITag, IUser } from '../types';
import { Alert } from '@material-ui/lab';

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
    errorOpen: boolean;
    setSortFilter: (sort: SortMethods) => void;
    setTagFilter: (tags: ITag['value'][] | undefined) => void;
    setOwnerFilter: (rcId: IUser['rcId'] | undefined) => void;
    setErrorOpen: (status: boolean) => void;
}
export const useStore = create<AppState>((set) => ({
    sortFilter: SortMethods['Last Updated'],
    tagFilter: undefined,
    ownerFilter: undefined,
    addForm: false,
    errorOpen: false,
    setSortFilter: (sort) => set({ sortFilter: sort }),
    setTagFilter: (tags) => set({ tagFilter: tags }),
    setOwnerFilter: (rcId) => {
        set({
            ownerFilter: rcId,
        });
    },
    setErrorOpen: (status) => set({ errorOpen: status }),
}));

const Home = (): JSX.Element => {
    const [params, setParams] = useState<QueryParams>({ sort: SortMethods['Last Updated'] });
    const [allProjects, setAllProjects] = useState<boolean>(true);
    const { data: projects, isSuccess, error, refetch } = useProjects(params);
    const errorOpen = useStore((state: AppState) => state.errorOpen);
    const setErrorOpen = useStore((state: AppState) => state.setErrorOpen);

    usePrefetchUsers({
        omitSelf: 'false',
    });

    const classes = useStyles();

    if (error) setErrorOpen(true);

    useEffect(() => {
        refetch();
    }, [allProjects]);

    return (
        <div className={classes.root}>
            <Nav setParams={setParams} allProjects={allProjects} setAllProjects={setAllProjects} />
            <Collapse in={allProjects}>
                <Filter setParams={setParams} />
            </Collapse>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={errorOpen}>
                <Alert severity="error" onClose={() => setErrorOpen(false)}>
                    An unexpected error has occurred
                </Alert>
            </Snackbar>
            {isSuccess && projects ? <ProjectList projects={projects} /> : <Loading />}
        </div>
    );
};

export default Home;
