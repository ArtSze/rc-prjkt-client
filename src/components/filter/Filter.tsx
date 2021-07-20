import React from 'react';
import Sort from './Sort';
import StatusFilter from './StatusFilter';
import FilterPicker from './FilterPicker/FilterPicker';
import { useImmer } from 'use-immer';
import { useEffect } from 'react';
import { ITag, IUser } from '../../types';
import { createParams } from '../../utils/paramParser';
import { useStyles } from '../../static/styles';
import { Divider } from '@material-ui/core';

export enum StatusChoices {
    'Active' = 'active',
    'Inactive' = 'inactive',
    'All' = 'all',
}

export type TTagFilter = ITag['value'][] | undefined;
export type TUserFilter = IUser['rcId'] | undefined;

export type QueryParams = {
    status?: boolean;
    tags?: TTagFilter;
    user?: TUserFilter;
    me?: boolean;
};

interface FilterProps {
    setParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

//TODO: add apply button

const Filter = ({ setParams }: FilterProps): JSX.Element => {
    const [statusFilter, setStatusFilter] = useImmer<StatusChoices>(StatusChoices['Active']);
    const [tagFilter, setTagFilter] = useImmer<TTagFilter>(undefined);
    const [userFilter, setUserFilter] = useImmer<TUserFilter>(undefined);
    const classes = useStyles();

    useEffect(() => {
        const params = createParams(statusFilter, tagFilter, userFilter);
        setParams(params);
    }, [statusFilter, tagFilter, userFilter]);

    return (
        <>
            <div className={classes.filterBar}>
                <FilterPicker
                    tagFilter={tagFilter}
                    setTagFilter={setTagFilter}
                    userFilter={userFilter}
                    setUserFilter={setUserFilter}
                />
                <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
                <Sort />
            </div>
            <Divider variant="fullWidth" style={{ marginBottom: '20px' }} />
        </>
    );
};

export default Filter;
