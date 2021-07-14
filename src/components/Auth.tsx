import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const Auth = () => {
    const history = useHistory();
    const { refetch, isError, isSuccess } = useAuth();
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

    // const history = useHistory();
    // const [token, setToken] = useState('');

    // useEffect(() => {
    //     fetch('http://localhost:4000/', {
    //         method: 'GET',
    //         credentials: 'include',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Credentials': 'true',
    //             // "Access-Control-Allow-Origin": "http://locahost:3000/",
    //             // "Access-Control-Allow-Methods": "GET",
    //             // "Access-Control-Allow-Headers": "Content-Type"
    //         },
    //     })
    //         .then(async (response) => {
    //             console.log(await response.json());
    //             history.push('/home');
    //         })
    //         .catch((error) => {
    //             console.log({ error });
    //         });
    // }, []);

    // async function fetchAuth() {
    //     try {
    //         const response = await fetch('http://localhost:4000/', {
    //             method: 'GET',
    //             mode: 'cors',
    //             credentials: 'include',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Credentials': 'true',
    //             },
    //         });
    //         if (response) {
    //             console.log({ response });
    //             history.push('/');
    //         }
    //     } catch (error) {
    //         console.log({ error });
    //     }
    // }

    // function authenticate() {
    //     const authURL = 'http://localhost:4000/auth';
    //     const authWindow = window.open(authURL, '_blank', 'width=500, height=600');

    //     if (authWindow!.closed) {
    //         console.log('authenticated');
    //     }
    // }

    // return (
    //     <div className="App">
    //         <h1>hi</h1>
    //         <button onClick={authenticate}>Login</button>
    //     </div>
    // );
};

export default Auth;
