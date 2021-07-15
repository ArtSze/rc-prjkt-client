import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const Auth = () => {
    const history = useHistory();
    // const { refetch, isError, isSuccess } = useAuth();
    // const handleClick = () => {
    //     refetch();
    // };

    // if (isSuccess) {
    //     history.push('/home');
    // }

    // if (isError) {
    return (
        <div>
            <a href="http://localhost:4000/auth">Click for auth</a>
            {/* <button type="button" onClick={handleClick}>
                try again
            </button> */}
        </div>
    );
};

export default Auth;
