import React from 'react';
import { Updater, useImmer } from 'use-immer';
import { TTagFilter, TUserFilter } from '../Nav';
import TagFilter from './Filters/TagFilter';
import UserFilter from './Filters/UserFilter';

interface FilterProps {
    tagFilter: TTagFilter;
    setTagFilter: Updater<TTagFilter>;
    userFilter: TUserFilter;
    setUserFilter: Updater<TUserFilter>;
}

type FilterOptions = 'tag-filter' | 'user-filter';

const Filter = ({ tagFilter, setTagFilter, userFilter, setUserFilter }: FilterProps): JSX.Element => {
    const [filter, setFilter] = useImmer<FilterOptions>('tag-filter');

    function handleChange(name: FilterOptions) {
        // handle filter type change
        setFilter(name);

        // reset the filters for tag and user since the filter type was changed
        setTagFilter(undefined);
        setUserFilter(undefined);
    }

    return (
        <div className="filter">
            <h3>Filter By Tag or User</h3>
            <div
                className="filter-radio-input"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFilter(e.target.name as FilterOptions);
                    // TODO: reset tag and user filters on change
                }}
            >
                <label htmlFor="tag-filter">
                    <input
                        type="radio"
                        name="tag-filter"
                        id="tag-filter"
                        checked={filter === 'tag-filter'}
                        onChange={(e) => handleChange(e.target.name as FilterOptions)}
                    />
                    Tag
                </label>
                <label htmlFor="user-filter">
                    <input
                        type="radio"
                        name="user-filter"
                        id="user-filter"
                        checked={filter === 'user-filter'}
                        onChange={(e) => handleChange(e.target.name as FilterOptions)}
                    />
                    User
                </label>
            </div>

            {filter === 'tag-filter' ? (
                <TagFilter tagFilter={tagFilter} setTagFilter={setTagFilter} />
            ) : (
                <UserFilter userFilter={userFilter} setUserFilter={setUserFilter} />
            )}
        </div>
    );
};

export default Filter;
