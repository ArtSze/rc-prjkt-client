import React from 'react';
import Sort from './Sort';
import StatusFilter from './StatusFilter';
import FilterPicker from './FilterPicker/FilterPicker';
import { useImmer } from 'use-immer';
import { useEffect } from 'react';
import { ITag, IUser } from '../../types';
import { createParams } from '../../utils/paramParser';
import { classNames } from 'react-select/src/utils';
import { useStyles } from '../../static/styles';
import { Paper, Toolbar, Button, Tab, Tabs, AppBar, Typography, Container } from '@material-ui/core';

export type TStatusFilter = {
    active: boolean;
    inactive: boolean;
};

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
    const [statusFilter, setStatusFilter] = useImmer<TStatusFilter>({
        active: true,
        inactive: false,
    });
    const [tagFilter, setTagFilter] = useImmer<TTagFilter>(undefined);
    const [userFilter, setUserFilter] = useImmer<TUserFilter>(undefined);
    const classes = useStyles();

    useEffect(() => {
        const params = createParams(statusFilter, tagFilter, userFilter);
        setParams(params);
    }, [statusFilter, tagFilter, userFilter]);

    return (
        <Paper className={classes.filter}>
            <div className={classes.filters}>
                <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
                <FilterPicker
                    tagFilter={tagFilter}
                    setTagFilter={setTagFilter}
                    userFilter={userFilter}
                    setUserFilter={setUserFilter}
                />
                <Sort />
            </div>
        </Paper>
    );
};

export default Filter;
