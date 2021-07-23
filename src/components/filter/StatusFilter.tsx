import React from 'react';
import { StatusChoices } from './Filter';
import { Updater } from 'use-immer';
import Select from 'react-select';
import { Typography } from '@material-ui/core';
import { useStyles } from '../../static/styles';
import { IOption } from '../../types';
import { Menu, SingleValue } from '../select/SelectComponents';

interface StatusFilterProps {
    statusFilter: StatusChoices;
    setStatusFilter: Updater<StatusChoices>;
}

const StatusFilter = ({ setStatusFilter }: StatusFilterProps): JSX.Element => {
    const options: IOption<StatusChoices>[] = [
        { value: StatusChoices['Active'], label: 'Active' },
        { value: StatusChoices['Inactive'], label: 'Inactive' },
        { value: StatusChoices['All'], label: 'All' },
    ];

    const classes = useStyles();

    return (
        <div className={classes.smallFilter}>
            <Typography variant="subtitle2">Status</Typography>
            <Select
                defaultValue={options[0]}
                components={{ Menu, SingleValue }}
                options={options}
                name="status-filter"
                onChange={(e) => {
                    console.log(e?.value);
                    setStatusFilter(e?.value as StatusChoices);
                }}
            />
        </div>
    );
};

export default StatusFilter;
