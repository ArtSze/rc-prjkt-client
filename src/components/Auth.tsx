import React, { useState, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const Auth = () => {
    const history = useHistory();
    const { data, refetch, isError, isSuccess } = useAuth();
    const handleClick = () => {
        refetch();
    };

    if (isSuccess) {
        history.push('/home');
    }

    if (isError) {
        return (
            <div>
                failed auth
                <button type="button" onClick={handleClick}>
                    try again
                </button>
            </div>
        );
    }

    return <div>auth attempt</div>;
};

export default Auth;
