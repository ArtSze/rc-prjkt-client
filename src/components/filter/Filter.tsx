import React from 'react';
import Sort from './Sort';
import StatusFilter from './StatusFilter';
import { useEffect } from 'react';
import { useStore, AppState } from '../Home';
import { ITag, IUser } from '../../types';
import { createParams } from '../../utils/paramParser';
import { useStyles } from '../../static/styles';
import { Divider } from '@material-ui/core';
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

    const classes = useStyles();

    useEffect(() => {
        const params = createParams(statusFilter, tagFilter, ownerFilter);
        setParams(params);
        console.log({ params });
    }, [statusFilter, tagFilter, ownerFilter]);

    return (
        <>
            <div className={classes.filterBar}>
                <TagFilter />
                <OwnerFilter />
                <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
                <Sort />
            </div>
            <Divider variant="fullWidth" style={{ marginBottom: '20px' }} />
        </>
    );
};

export default Filter;
