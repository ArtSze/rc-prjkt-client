import React from 'react';
import { Updater } from 'use-immer';
import Select from 'react-select';

import { useStore, AppState } from './../../Home';
import useTags from '../../../hooks/useTags';
import errorHandler from '../../../utils/errorHandler';

import { TTagFilter } from '../Filter';
import { ITag, ITagOptions } from '../../../types';

import { Typography } from '@material-ui/core';

const TagFilter = (): JSX.Element => {
    const setTagFilter = useStore((state: AppState) => state.setTagFilter);

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
