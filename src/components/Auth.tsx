import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../static/styles';
import usePing from '../hooks/usePing';
import { usePrefetchTags } from '../hooks/useTags';
import { usePrefetchUsers } from '../hooks/useUsers';
import { AppBar, Typography, Button, Tabs, Tab } from '@material-ui/core';
import logo from '../static/images/rc-logo.png';

const Auth = (): JSX.Element => {
    const history = useHistory();
    const { isError, isSuccess } = usePing();
    usePrefetchTags();
    usePrefetchUsers();
    const classes = useStyles();

    if (isSuccess) {
        history.push('/home');
    }

    if (isError) {
        return (
            <AppBar className={classes.appBar} position="fixed">
                <div className={classes.appBarLeft}>
                    <img alt="logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} src={logo}></img>
                    <Typography variant="h6" color="primary">
                        RC-Prjkt
                    </Typography>
                </div>
                <div className={classes.appBarRight}>
                    <Button
                        style={{ margin: '5px 25px 5px 5px' }}
                        variant="contained"
                        color="primary"
                        href="http://localhost:4000/auth"
                    >
                        Log In
                    </Button>
                </div>
            </AppBar>
        );
    }

    return <h1>RC-Prjkt</h1>;
};

export default Auth;
