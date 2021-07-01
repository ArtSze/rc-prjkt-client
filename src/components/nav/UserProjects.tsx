import React from 'react';

interface UserProjectsProps {
    message: string;
}

const UserProjects = ({ message }: UserProjectsProps): JSX.Element => {
    return (
        <div>
            <h3>UserProjects</h3>
            <p>{message}</p>
        </div>
    );
};

export default UserProjects;
