import React from 'react';
import Sort from './Sort';
import StatusFilter from './StatusFilter';
import { useEffect } from 'react';
import { useStore, AppState } from '../Home';
import { ITag, IUser } from '../../types';
import { createParams } from '../../utils/paramParser';
import { Divider, Grid } from '@material-ui/core';
import OwnerFilter from './OwnerFilter';
import TagFilter from './TagFilter';
import { useImmer } from 'use-immer';

export enum StatusChoices {
    'Active' = 'active',
    'Inactive' = 'inactive',
    'All' = 'all',
}

export type TTagFilter = ITag['value'][] | undefined;
export type TOwnerFilter = IUser['rcId'] | undefined;

export type QueryParams = {
    status?: boolean;
    tags?: TTagFilter;
    user?: TOwnerFilter;
    me?: boolean;
};

interface FilterProps {
    setParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

const Filter = ({ setParams }: FilterProps): JSX.Element => {
    const [statusFilter, setStatusFilter] = useImmer<StatusChoices>(StatusChoices['Active']);
    const tagFilter = useStore((state: AppState) => state.tagFilter);
    const ownerFilter = useStore((state: AppState) => state.ownerFilter);

    useEffect(() => {
        const params = createParams(statusFilter, tagFilter, ownerFilter);
        setParams(params);
        console.log({ params });
    }, [statusFilter, tagFilter, ownerFilter]);

    return (
        <>
            <Grid container spacing={1}>
                <TagFilter />
                <OwnerFilter />
                <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
                <Sort />
            </Grid>
            <Divider variant="fullWidth" style={{ marginTop: '20px', marginBottom: '20px' }} />
        </>
    );
};

export default Filter;
