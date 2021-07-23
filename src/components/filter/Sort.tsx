import { Typography } from '@material-ui/core';
import React from 'react';
import Select from 'react-select';
import { useStyles } from '../../static/styles';
import { IOption } from '../../types';
import { AppState, useStore } from '../Home';
import { Menu, SingleValue, SortControl } from '../select/SelectComponents';
import { SortMethods } from '../Home';

const Sort = (): JSX.Element => {
    const sortFilter = useStore((state: AppState) => state.sortFilter);
    const setSortFilter = useStore((state: AppState) => state.setSortFilter);

    const options: IOption<SortMethods>[] = [
        { value: SortMethods['Last Updated'], label: 'Last Updated' },
        { value: SortMethods['First Updated'], label: 'First Updated' },
        { value: SortMethods['Last Created'], label: 'Last Created' },
        { value: SortMethods['First Created'], label: 'First Created' },
        { value: SortMethods['Latest Batch'], label: 'Latest Batch' },
        { value: SortMethods['Oldest Batch'], label: 'Oldest Batch' },
    ];

    const classes = useStyles();

    const getValue = () => {
        return options.filter((sort) => sortFilter?.includes(sort.value));
    };

    return (
        <div className={classes.smallFilter}>
            <Typography variant="subtitle2">Sort</Typography>
            <Select
                options={options}
                components={{ Control: SortControl, Menu, SingleValue }}
                value={getValue()}
                onChange={(e) => {
                    if (e) setSortFilter(e.value);
                }}
            />
        </div>
    );
};

export default Sort;
