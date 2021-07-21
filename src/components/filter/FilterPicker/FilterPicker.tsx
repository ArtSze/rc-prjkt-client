import React from 'react';
import { useImmer } from 'use-immer';
import TagFilter from './TagFilter';
import OwnerFilter from './UserFilter';
import { useStore, AppState } from '../../Home';
import { Button } from '@material-ui/core';
import { FaTag, FaUser } from 'react-icons/fa';

const FilterPicker = (): JSX.Element => {
    const setUserFilter = useStore((state: AppState) => state.setUserFilter);
    const setTagFilter = useStore((state: AppState) => state.setTagFilter);

    const [isFilterTag, setIsFilterTag] = useImmer<boolean>(true);

    function toggleUserOrTag() {
        // handle filter type change
        console.log('before', isFilterTag);
        setIsFilterTag((prevState) => !prevState);
        console.log('after', isFilterTag);

        // reset the filters for tag and user since the filter type was changed
        setTagFilter(undefined);
        setUserFilter(undefined);
    }

    return (
        <div>
            {isFilterTag ? <TagFilter /> : <OwnerFilter />}
            <Button size="small" style={{ marginTop: '5px' }} onClick={toggleUserOrTag} variant="outlined">
                {isFilterTag ? <FaUser style={{ marginRight: '5px' }} /> : <FaTag style={{ marginRight: '5px' }} />}
                {isFilterTag ? 'Filter by User' : 'Filter by Tags'}
            </Button>
        </div>
    );
};

export default FilterPicker;
