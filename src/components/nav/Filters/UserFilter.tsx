import React, { useState } from 'react';
import { Updater } from 'use-immer';
import { TUserFilter } from '../../Nav';
import Select from 'react-select';
// import useUsers, { IUser } from '../../../hooks/users';
import { users } from '../../../data.json';
import { useEffect } from 'react';

interface UserFilterProps {
    userFilter: TUserFilter;
    setUserFilter: Updater<TUserFilter>;
}

interface IOption {
    value: any;
    label: string;
}

const UserFilter = ({ userFilter, setUserFilter }: UserFilterProps): JSX.Element => {
    // const users = useUsers();
    const [options, setOptions] = useState<IOption[]>([]);

    useEffect(() => {
        if (users) {
            const newOptions: IOption[] = users.map((user) => {
                return {
                    value: user,
                    label: `${user.first_name} ${user.last_name}`,
                };
            });
            setOptions(newOptions);
        }
    }, [users]);

    return (
        <div className="user-filter">
            <h3>UserFilter</h3>
            <Select options={options} />
        </div>
    );
};

export default UserFilter;
