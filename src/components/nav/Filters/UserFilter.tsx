import React from 'react';
import { Updater } from 'use-immer';
import { TUserFilter } from '../../Nav';
import Select from 'react-select';
import useUsers from '../../../hooks/useUsers';
import { IUser, IUserOptions } from '../../../types';

interface UserFilterProps {
    userFilter: TUserFilter;
    setUserFilter: Updater<TUserFilter>;
}

const UserFilter = ({ userFilter, setUserFilter }: UserFilterProps): JSX.Element => {
    const { data: users, error, isLoading, isSuccess } = useUsers();

    if (isLoading) return <h3>Loading...</h3>;

    if (error)
        return (
            <div>
                <h3>Error</h3>
                <p>{error.message.toString()}</p>;
            </div>
        );

    if (isSuccess && users) {
        const options: IUserOptions = users.map((user: IUser) => {
            return {
                value: user,
                label: `${user.first_name} ${user.last_name}`,
            };
        });

        return (
            <div className="user-filter">
                <h3>UserFilter</h3>
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
