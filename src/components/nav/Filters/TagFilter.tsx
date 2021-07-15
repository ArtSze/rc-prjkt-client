import React from 'react';
import { Updater } from 'use-immer';
import { TTagFilter } from '../Nav';
import Select from 'react-select';
import useTags from '../../../hooks/useTags';
import { ITag, ITagOptions } from '../../../types';

interface TagFilterProps {
    tagFilter: TTagFilter;
    setTagFilter: Updater<TTagFilter>;
}

const TagFilter = ({ tagFilter, setTagFilter }: TagFilterProps): JSX.Element => {
    const { data: tags, error, isLoading, isSuccess } = useTags();

    function handleChange(selectFilter: ITagOptions) {
        const tags: TTagFilter = selectFilter.map((tagOption) => tagOption.value.value);
        // set tags to undefined if there are no tags to filter by
        tags.length > 0 ? setTagFilter(tags) : setTagFilter(undefined);
    }

    if (isLoading) return <h3>Loading...</h3>;

    if (error)
        return (
            <div>
                <h3>Error</h3>
                <p>{error.message.toString()}</p>;
            </div>
        );

    if (isSuccess && tags) {
        const options: ITagOptions = tags.map((tag: ITag) => {
            return {
                value: tag,
                label: tag.value,
            };
        });

        return (
            <div className="tag-filter">
                <h3>TagFilter</h3>
                {/* QUESTION: does the select component need the value set in state? */}
                <Select
                    options={options}
                    name="tag-filter"
                    onChange={(e) => handleChange(e as ITagOptions)}
                    isMulti
                    isClearable
                    isSearchable
                />
            </div>
        );
    }
    return <div>Error</div>;
};

export default TagFilter;
