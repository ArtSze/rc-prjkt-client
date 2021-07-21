import { Typography } from '@material-ui/core';
import React from 'react';
import Select from 'react-select';
import { useImmer } from 'use-immer';
import { useStyles } from '../../static/styles';
import { IOption } from '../../types';
import { MdSort } from 'react-icons/md';
import { Menu, SingleValue, SortControl } from '../select/SelectComponents';

enum SortMethods {
    'Last Updated' = 'last updated',
    'Created' = 'created',
    'Batch' = 'batch',
}

const Sort = (): JSX.Element => {
    const options: IOption<SortMethods>[] = [
        { value: SortMethods['Last Updated'], label: 'Last Updated' },
        { value: SortMethods['Created'], label: 'Created' },
        { value: SortMethods['Batch'], label: 'Batch' },
    ];

    const [sort, setSort] = useImmer<IOption<SortMethods> | null>(options[2]);
    const classes = useStyles();

    return (
        <div className={classes.smallFilter}>
            <Typography variant="subtitle2">Sort</Typography>
            <Select
                options={options}
                components={{ Control: SortControl, Menu, SingleValue }}
                value={sort}
                onChange={setSort}
            />
        </div>
    );
};

export default Sort;
