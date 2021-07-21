import React from 'react';
import { Updater } from 'use-immer';
import { TTagFilter } from '../Filter';
import Select from 'react-select';
import useTags from '../../../hooks/useTags';
import { ITag, ITagOptions } from '../../../types';
import errorHandler from '../../../utils/errorHandler';
import { Typography } from '@material-ui/core';
import { TagControl, Menu, Placeholder, TagMultiValueLabel, multiStyles } from '../../select/SelectComponents';

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

    if (error) errorHandler(error);

    if (isSuccess && tags) {
        const options: ITagOptions = tags.map((tag: ITag) => {
            return {
                value: tag,
                label: tag.value,
            };
        });

        return (
            <div className="tag-filter">
                <Typography variant="subtitle2">Tag Filter</Typography>
                {/* QUESTION: does the select component need the value set in state? */}
                <Select
                    components={{ Control: TagControl, Menu, MultiValueLabel: TagMultiValueLabel, Placeholder }}
                    options={options}
                    name="tag-filter"
                    onChange={(e) => handleChange(e as ITagOptions)}
                    placeholder="Select tags..."
                    isMulti
                    isClearable
                    isSearchable
                    styles={multiStyles}
                />
            </div>
        );
    }

    return <div>Error</div>;
};

export default TagFilter;
