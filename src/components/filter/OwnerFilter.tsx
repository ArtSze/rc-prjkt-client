import React from 'react';
import Select from 'react-select';
import useUsers from '../../hooks/useUsers';
import { IUser, IUserOptions, IOption } from '../../types';
import errorHandler from '../../utils/errorHandler';
import { useStore, AppState } from '../Home';
import { Grid, Typography } from '@material-ui/core';
import { UserControl, Menu, Option, Placeholder, UserSingleValue } from '../select/SelectComponents';

const OwnerFilter = (): JSX.Element => {
    const setOwnerFilter = useStore((state: AppState) => state.setOwnerFilter);
    const ownerFilter = useStore((state: AppState) => state.ownerFilter);
    const {
        data: users,
        error,
        isSuccess,
    } = useUsers({
        omitSelf: 'false',
    });

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

        return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
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
            </Grid>
        );
    }

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Typography variant="subtitle2">Owner Filter</Typography>
            <Select
                components={{ Control: UserControl, Option, Menu, Placeholder, SingleValue: UserSingleValue }}
                name="user-filter"
                placeholder="Select user..."
                isClearable
                isSearchable
            />
        </Grid>
    );
};

export default OwnerFilter;