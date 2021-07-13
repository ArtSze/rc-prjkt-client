import React from 'react';
import Select from 'react-select';
import { useImmer } from 'use-immer';
import { IOption } from '../../types';

enum SortMethods {
    'Last Updated' = 'last updated',
    'Created' = 'created',
    'Batch' = 'batch',
}

const Sort = (): JSX.Element => {
    const options: IOption<SortMethods>[] = [
        { value: SortMethods['Last Updated'], label: 'Last Updated' },
        { value: SortMethods['Created'], label: 'Created' },
        { value: SortMethods['Batch'], label: 'Batch' },
    ];

    const [sort, setSort] = useImmer<IOption<SortMethods> | null>(options[2]);

    return (
        <div>
            <h3>Sort</h3>
            <Select options={options} value={sort} onChange={setSort} />
        </div>
    );
};

export default Sort;
