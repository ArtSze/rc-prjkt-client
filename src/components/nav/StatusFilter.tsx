import React from 'react';
import { TStatusFilter } from '../Nav';
import { Updater } from 'use-immer';

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
        <div>
            <h3>Status Filter</h3>
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
