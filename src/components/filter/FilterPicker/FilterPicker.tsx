import { Button } from '@material-ui/core';
import React from 'react';
import { Updater, useImmer } from 'use-immer';
import { TTagFilter, TUserFilter } from '../Filter';
import TagFilter from './TagFilter';
import UserFilter from './UserFilter';
import { FaTags, FaUser } from 'react-icons/fa';
import { useStyles } from '../../../static/styles';

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
        console.log('before', isFilterTag);
        setIsFilterTag((prevState) => !prevState);
        console.log('after', isFilterTag);

        // reset the filters for tag and user since the filter type was changed
        setTagFilter(undefined);
        setUserFilter(undefined);
    }

    const classes = useStyles();

    return (
        <div className={classes.bigFilter}>
            {isFilterTag ? (
                <TagFilter tagFilter={tagFilter} setTagFilter={setTagFilter} />
            ) : (
                <UserFilter userFilter={userFilter} setUserFilter={setUserFilter} />
            )}
            <Button size="small" style={{ marginTop: '5px' }} onClick={handleChange} variant="outlined">
                {isFilterTag ? <FaUser style={{ marginRight: '5px' }} /> : <FaTags style={{ marginRight: '5px' }} />}
                {isFilterTag ? 'Filter by User' : 'Filter by Tags'}
            </Button>
        </div>
    );
};

export default FilterPicker;
