import React from 'react';

interface SortProps {
    message: string;
}

const Sort = ({ message }: SortProps): JSX.Element => {
    return (
        <div>
            <h3>Sort</h3>
            <p>{message}</p>
        </div>
    );
};

export default Sort;
