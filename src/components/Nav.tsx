import React from 'react';
import Sort from './nav/Sort';
import StatusFilter from './nav/StatusFilter';
import TagFilter from './nav/TagFilter';
import UserFilter from './nav/UserFilter';
import UserProjects from './nav/UserProjects';

interface NavProps {
    message: string;
}

const Nav = ({ message }: NavProps): JSX.Element => {
    return (
        <nav>
            <h2>Nav</h2>
            <StatusFilter message={message} />
            <Sort message={message} />
            <TagFilter message={message} />
            <UserFilter message={message} />
            <UserProjects message={message} />
        </nav>
    );
};

export default Nav;
