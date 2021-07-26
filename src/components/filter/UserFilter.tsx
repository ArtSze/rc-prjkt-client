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
    const classes = useStyles();
    const setUserFilter = useStore((state: AppState) => state.setUserFilter);
    const userFilter = useStore((state: AppState) => state.userFilter);

    const {
        data: users,
        error,
        isLoading,
        isSuccess,
    } = useUsers({
        omitSelf: 'false',
    });

    const handleChange = (userOption: IOption<IUser>) => {
        userOption ? setUserFilter(userOption.value.rcId) : setUserFilter(undefined);
    };

    if (isLoading) return <h3>Loading...</h3>;

    if (error) errorHandler(error);

    if (isSuccess && users) {
        const options: IUserOptions = users.map((user: IUser) => {
            return {
                value: user,
                label: `${user.first_name} ${user.last_name}`,
            };
        });

        const getValue = () => {
            const option = options.filter((u) => u.value.rcId === userFilter);
            // console.log(option);
            return option.length > 0 ? option[0] : null;
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
                    onChange={(e) => handleChange(e as IOption<IUser>)}
                    placeholder="Select user..."
                    isClearable
                    isSearchable
                />
            </div>
        );
    }

    return (
        <div className={classes.userFilter}>
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

export default UserFilter;
