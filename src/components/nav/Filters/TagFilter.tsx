import React from 'react';
import { Updater } from 'use-immer';
import { TTagFilter } from '../../Nav';
import Select from 'react-select';

interface TagFilterProps {
    tagFilter: TTagFilter;
    setTagFilter: Updater<TTagFilter>;
}

const TagFilter = ({ tagFilter, setTagFilter }: TagFilterProps): JSX.Element => {
    // TODO: generate options from custom hook
    const options = [
        { value: 'Python', label: 'Python' },
        { value: 'pairing', label: 'pairing' },
        { value: 'Bootstrap', label: 'Bootstrap' },
    ];

    return (
        <div className="tag-filter">
            <h3>TagFilter</h3>
            <Select options={options} />
        </div>
    );
};

export default TagFilter;
