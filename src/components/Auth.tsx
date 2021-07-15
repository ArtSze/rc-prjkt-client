import React from 'react';
import { useHistory } from 'react-router-dom';

import usePing from '../hooks/usePing';
import { usePrefetchTags } from '../hooks/useTags';
import { usePrefetchUsers } from '../hooks/useUsers';

const Auth = (): JSX.Element => {
    const history = useHistory();
    const { isError, isSuccess } = usePing();
    usePrefetchTags();
    usePrefetchUsers();

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

    return <h1>RC-Prjkt</h1>;
};

export default Auth;
