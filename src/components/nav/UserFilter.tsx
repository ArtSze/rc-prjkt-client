import React from 'react';

interface UserFilterProps {
    message: string;
}

const UserFilter = ({ message }: UserFilterProps): JSX.Element => {
    return (
        <div>
            <h3>UserFilter</h3>
            <p>{message}</p>
        </div>
    );
};

export default UserFilter;
