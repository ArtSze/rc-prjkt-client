import React from 'react';

interface StatusFilterProps {
    message: string;
}

const StatusFilter = ({ message }: StatusFilterProps): JSX.Element => {
    return (
        <div>
            <h3>Sort</h3>
            <p>{message}</p>
        </div>
    );
};

export default StatusFilter;
