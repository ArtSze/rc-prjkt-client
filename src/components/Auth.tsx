import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';

import usePing from '../hooks/usePing';

const Auth = () => {
    const history = useHistory();
    const { isError, isSuccess } = usePing();

    if (isSuccess) {
        history.push('/home');
    }

    if (isError) {
        return (
            <div>
                <a href="http://localhost:4000/auth">Click for auth</a>
            </div>
        );
    }

    return <div>auth</div>;
};

export default Auth;
