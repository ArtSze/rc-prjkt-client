import React from 'react';
import { Updater } from 'use-immer';
import { TUserFilter } from '../../Nav';
import Select from 'react-select';

interface UserFilterProps {
    userFilter: TUserFilter;
    setUserFilter: Updater<TUserFilter>;
}
const UserFilter = ({ userFilter, setUserFilter }: UserFilterProps): JSX.Element => {
    // TODO: generate options from custom hook
    const options = [
        { value: 'Amanda', label: 'Amanda' },
        { value: 'Artur', label: 'Artur' },
    ];

    function handleClick() {
        // TODO: set filter to self when for button onClick
        // QUESTION: how to get user rcId
    }

    return (
        <div>
            <h3>UserFilter</h3>
            <Select options={options} />
            <button onClick={handleClick}>My Projects</button>
        </div>
    );
};

export default UserFilter;
