import React from 'react';
import { Updater } from 'use-immer';
import { TUserFilter } from '../Filter';
import Select from 'react-select';
import useUsers from '../../../hooks/useUsers';
import { IUser, IUserOptions } from '../../../types';
import errorHandler from '../../../utils/errorHandler';
import { Typography } from '@material-ui/core';

interface UserFilterProps {
    userFilter: TUserFilter;
    setUserFilter: Updater<TUserFilter>;
}

const UserFilter = ({ userFilter, setUserFilter }: UserFilterProps): JSX.Element => {
    const { data: users, error, isLoading, isSuccess } = useUsers();

    if (isLoading) return <h3>Loading...</h3>;

    if (error) errorHandler(error);

    if (isSuccess && users) {
        const options: IUserOptions = users.map((user: IUser) => {
            return {
                value: user,
                label: `${user.first_name} ${user.last_name}`,
            };
        });

        return (
            <div className="user-filter">
                <Typography variant="subtitle2">Tag Filter</Typography>
                {/* QUESTION: does the select component need the value set in state? */}
                <Select
                    options={options}
                    name="user-filter"
                    onChange={(e) => setUserFilter(e?.value.rcId)}
                    isClearable
                    isSearchable
                />
            </div>
        );
    }

    return <div>Error</div>;
};

export default UserFilter;
