import React from 'react';

interface TagFilterProps {
    message: string;
}

const TagFilter = ({ message }: TagFilterProps): JSX.Element => {
    return (
        <div>
            <h3>UserFilter</h3>
            <p>{message}</p>
        </div>
    );
};

export default TagFilter;
