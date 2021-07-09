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

const Filter = (props: FilterProps): JSX.Element => {
    const [filter, setFilter] = useImmer<FilterOptions>('tag-filter');

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
                        onChange={(e) => setFilter(e.target.name as FilterOptions)}
                    />
                    Tag
                </label>
                <label htmlFor="user-filter">
                    <input
                        type="radio"
                        name="user-filter"
                        id="user-filter"
                        checked={filter === 'user-filter'}
                        onChange={(e) => setFilter(e.target.name as FilterOptions)}
                    />
                    User
                </label>
            </div>

            {filter === 'tag-filter' ? (
                <TagFilter tagFilter={props.tagFilter} setTagFilter={props.setTagFilter} />
            ) : (
                <UserFilter userFilter={props.userFilter} setUserFilter={props.setUserFilter} />
            )}
        </div>
    );
};

export default Filter;
