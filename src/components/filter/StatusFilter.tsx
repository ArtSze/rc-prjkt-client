import React from 'react';
import { TStatusFilter } from './Filter';
import { Updater } from 'use-immer';
import { Typography } from '@material-ui/core';

interface StatusFilterProps {
    statusFilter: TStatusFilter;
    setStatusFilter: Updater<TStatusFilter>;
}

const StatusFilter = ({ statusFilter, setStatusFilter }: StatusFilterProps): JSX.Element => {
    const handleChange = (name: keyof TStatusFilter) => {
        setStatusFilter((draft) => {
            draft[name] = !draft[name];
        });
    };

    return (
        <div className="status-filter">
            <Typography variant="subtitle2">Status Filter</Typography>
            {/* TODO: at least one checkbox must be selected */}
            <label>
                <input
                    type="checkbox"
                    name="active"
                    checked={statusFilter.active}
                    onChange={(e) => handleChange(e.target.name as keyof TStatusFilter)}
                />
                Active
            </label>
            <label>
                <input
                    type="checkbox"
                    name="inactive"
                    checked={statusFilter.inactive}
                    onChange={(e) => handleChange(e.target.name as keyof TStatusFilter)}
                />
                Inactive
            </label>
        </div>
    );
};

export default StatusFilter;
