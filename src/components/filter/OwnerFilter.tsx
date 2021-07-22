import React from 'react';
import Select from 'react-select';
import useUsers from '../../hooks/useUsers';
import { IUser, IUserOptions, IOption } from '../../types';
import errorHandler from '../../utils/errorHandler';
import { useStore, AppState } from '../Home';
import { useStyles } from '../../static/styles';
import { Typography } from '@material-ui/core';
import { UserControl, Menu, Option, Placeholder, UserSingleValue } from '../select/SelectComponents';

const OwnerFilter = (): JSX.Element => {
    const classes = useStyles();
<<<<<<< HEAD:src/components/filter/OwnerFilter.tsx
    const setOwnerFilter = useStore((state: AppState) => state.setOwnerFilter);
    const ownerFilter = useStore((state: AppState) => state.ownerFilter);
    const { data: users, error, isSuccess } = useUsers();
=======
    const setUserFilter = useStore((state: AppState) => state.setUserFilter);
    const userFilter = useStore((state: AppState) => state.userFilter);

    const classes = useStyles();

    const { data: users, error, isLoading, isSuccess } = useUsers();

    if (isLoading) return <h3>Loading...</h3>;
>>>>>>> 49a0c2e650b6c568930f106dab1f44866a823f02:src/components/filter/UserFilter.tsx

    if (error) errorHandler(error);

    if (isSuccess && users) {
        const options: IUserOptions = users.map((user: IUser) => {
            return {
                value: user,
                label: `${user.first_name} ${user.last_name}`,
            };
        });

        const getValue = (): IOption<IUser> => {
            const option = options.filter((u) => u.value.rcId === ownerFilter);
            return option[0];
        };

        // TODO: change from user filter to owner filter?
        return (
            <div className={classes.ownerFilter}>
                <Typography variant="subtitle2">Owner Filter</Typography>
                <Select
                    value={getValue()}
                    components={{ Control: UserControl, Option, Menu, Placeholder, SingleValue: UserSingleValue }}
                    options={options}
                    name="user-filter"
                    onChange={(e) => setOwnerFilter(e?.value.rcId)}
                    placeholder="Select user..."
                    isClearable
                    isSearchable
                />
            </div>
        );
    }

    return (
        <div className={classes.ownerFilter}>
            <Typography variant="subtitle2">Owner Filter</Typography>
            <Select
                components={{ Control: UserControl, Option, Menu, Placeholder, SingleValue: UserSingleValue }}
                name="user-filter"
                placeholder="Select user..."
                isClearable
                isSearchable
            />
        </div>
    );
};

export default OwnerFilter;
