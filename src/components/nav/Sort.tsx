import React from 'react';
import Select from 'react-select';

const Sort = (): JSX.Element => {
    const options = [
        { value: 'last updated', label: 'Last Updated' },
        { value: 'created', label: 'Created' },
        { value: 'batch', label: 'Batch' },
    ];

    return (
        <div>
            <h3>Sort</h3>
            <Select options={options} />
        </div>
    );
};

export default Sort;
