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
    'Created' = 'created',
    'Batch' = 'batch',
}

export interface AppState {
    sortFilter: SortMethods;
    tagFilter: TTagFilter;
    ownerFilter: TOwnerFilter;
    addForm: boolean;
    setSortFilter: (sort: SortMethods) => void;
    setTagFilter: (tags: ITag['value'][] | undefined) => void;
    setOwnerFilter: (rcId: IUser['rcId'] | undefined) => void;
    setAddForm: () => void;
}
export const useStore = create<AppState>((set) => ({
    sortFilter: SortMethods['Batch'],
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
    setAddForm: () =>
        set((state) => ({
            addForm: !state.addForm,
        })),
}));

const Home = (): JSX.Element => {
    const [params, setParams] = useState<QueryParams>({ sort: SortMethods['Batch'] });
    const [allProjects, setAllProjects] = useState<boolean>(true);
    const addForm = useStore((state) => state.addForm);

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
            <Collapse in={addForm}>
                <ProjectFormAdd />
            </Collapse>
            {isSuccess && projects ? <ProjectList projects={projects} /> : <Loading />}
        </div>
    );
};

export default Home;
