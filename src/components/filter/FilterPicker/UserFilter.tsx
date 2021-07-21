import React from 'react';
import { Updater } from 'use-immer';
import { TUserFilter } from '../Filter';
import Select from 'react-select';
import useUsers from '../../../hooks/useUsers';
import { IUser, IUserOptions, IOption } from '../../../types';
import errorHandler from '../../../utils/errorHandler';
import { useStore, AppState } from './../../Home';

import { Typography } from '@material-ui/core';

const UserFilter = (): JSX.Element => {
    const setUserFilter = useStore((state: AppState) => state.setUserFilter);
    const userFilter = useStore((state: AppState) => state.userFilter);

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

        const getValue = (): IOption<IUser> => {
            const option = options.filter((u) => u.value.rcId === userFilter);
            return option[0];
        };

        return (
            <div className="user-filter">
                <Typography variant="subtitle2">User Filter</Typography>
                {/* QUESTION: does the select component need the value set in state? */}
                <Select
                    value={getValue()}
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
