import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Radio,
    RadioGroup,
    Switch,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { Updater, useImmer } from 'use-immer';
import { TTagFilter, TUserFilter } from '../Filter';
import TagFilter from './TagFilter';
import UserFilter from './UserFilter';
import { FaTag, FaUser } from 'react-icons/fa';

interface FilterPickerProps {
    tagFilter: TTagFilter;
    setTagFilter: Updater<TTagFilter>;
    userFilter: TUserFilter;
    setUserFilter: Updater<TUserFilter>;
}

const FilterPicker = ({ tagFilter, setTagFilter, userFilter, setUserFilter }: FilterPickerProps): JSX.Element => {
    const [isFilterTag, setIsFilterTag] = useImmer<boolean>(true);

    function handleChange() {
        // handle filter type change
        setIsFilterTag((prevState) => !prevState);

        // reset the filters for tag and user since the filter type was changed
        setTagFilter(undefined);
        setUserFilter(undefined);
    }

    return (
        <div className="filter-picker">
            {isFilterTag ? (
                <TagFilter tagFilter={tagFilter} setTagFilter={setTagFilter} />
            ) : (
                <UserFilter userFilter={userFilter} setUserFilter={setUserFilter} />
            )}
            <FormControlLabel
                control={
                    <Switch
                        checked={isFilterTag}
                        name={isFilterTag ? 'tag-filter' : 'user-filter'}
                        checkedIcon={<FaTag />}
                        icon={<FaUser />}
                        onChange={handleChange}
                    />
                }
                label="Filter by Tag or User"
            />
        </div>
    );
};

export default FilterPicker;
