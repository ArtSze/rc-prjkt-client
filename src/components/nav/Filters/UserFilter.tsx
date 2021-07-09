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
    const { data, error, isLoading, isSuccess } = useUsers();
    if (isLoading) return <h3>Loading...</h3>;
    if (error)
        return (
            <div>
                <h3>Error</h3>
                <p>{error.message.toString()}</p>;
            </div>
        );

    if (isSuccess && data) {
        const options: IUserOptions = data.map((user: IUser) => {
            return {
                value: user,
                label: `${user.first_name} ${user.last_name}`,
            };
        });

        return (
            <div className="user-filter">
                <h3>UserFilter</h3>
                <Select options={options} />
            </div>
        );
    }

    return <div>Hi</div>;
};

export default UserFilter;
