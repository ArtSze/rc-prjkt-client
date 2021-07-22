import React from 'react';
import Select from 'react-select';
import { useStore, AppState } from '../Home';
import useTags from '../../hooks/useTags';
import errorHandler from '../../utils/errorHandler';
import { useStyles } from '../../static/styles';
import { TTagFilter } from './Filter';
import { ITag, ITagOptions, IOption } from '../../types';
import { Typography } from '@material-ui/core';
import { TagControl, Menu, Placeholder, TagMultiValueLabel, multiStyles } from '../select/SelectComponents';

const TagFilter = (): JSX.Element => {
    const classes = useStyles();
    const setTagFilter = useStore((state: AppState) => state.setTagFilter);

    const tagFilter = useStore((state: AppState) => state.tagFilter);

    const { data: tags, error, isLoading, isSuccess } = useTags();

    function handleChange(selectFilter: ITagOptions) {
        const tags: TTagFilter = selectFilter.map((tagOption) => tagOption.value.value);
        // set tags to undefined if there are no tags to filter by
        tags.length > 0 ? setTagFilter(tags) : setTagFilter(undefined);
    }

    if (error) errorHandler(error);

    if (isSuccess && tags) {
        const options: ITagOptions = tags.map((tag: ITag) => {
            return {
                value: tag,
                label: tag.value,
            };
        });

        const getValue = () => {
            return options.filter((t) => tagFilter?.includes(t.value.value));
        };

        return (
            <div className={classes.tagFilter}>
                <Typography variant="subtitle2">Tag Filter</Typography>
                <Select
                    value={getValue()}
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

    return (
        <Select
            components={{ Control: TagControl, Menu, MultiValueLabel: TagMultiValueLabel, Placeholder }}
            name="tag-filter"
            placeholder="Select tags..."
            isMulti
            isClearable
            isSearchable
            styles={multiStyles}
        />
    );
};

export default TagFilter;
