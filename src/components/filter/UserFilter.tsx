import React from 'react';
import Select from 'react-select';
import useUsers from '../../hooks/useUsers';
import { IUser, IUserOptions, IOption } from '../../types';
import errorHandler from '../../utils/errorHandler';
import { useStore, AppState } from '../Home';
import { useStyles } from '../../static/styles';
import { Typography } from '@material-ui/core';
import { UserControl, Menu, Option, Placeholder, UserSingleValue } from '../select/SelectComponents';

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

        const classes = useStyles();
        const getValue = (): IOption<IUser> => {
            const option = options.filter((u) => u.value.rcId === userFilter);
            return option[0];
        };

        // TODO: change from user filter to owner filter?
        return (
            <div className={classes.userFilter}>
                <Typography variant="subtitle2">Owner Filter</Typography>
                <Select
                    value={getValue()}
                    components={{ Control: UserControl, Option, Menu, Placeholder, SingleValue: UserSingleValue }}
                    options={options}
                    name="user-filter"
                    onChange={(e) => setUserFilter(e?.value.rcId)}
                    placeholder="Select user..."
                    isClearable
                    isSearchable
                />
            </div>
        );
    }

    return <div>Error</div>;
};

export default UserFilter;
