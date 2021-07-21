import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../static/styles';
import usePing from '../hooks/usePing';
import { usePrefetchTags } from '../hooks/useTags';
import { usePrefetchUsers } from '../hooks/useUsers';
import { AppBar, Typography, Button } from '@material-ui/core';
import logo from '../static/images/rc-logo.png';
import Container from '@material-ui/core/Container';

const Auth = (): JSX.Element => {
    const history = useHistory();
    const { isError, isSuccess } = usePing();
    usePrefetchTags();
    usePrefetchUsers();
    const classes = useStyles();

    if (isSuccess) {
        history.push('/home');
    }

    return (
        <>
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
                        Authorize
                    </Button>
                </div>
            </AppBar>
            <Container style={{ marginTop: '100px' }} component="main" maxWidth="sm">
                <div className={classes.auth}>
                    <img alt="logo" src={logo}></img>
                    <Typography style={{ marginTop: '20px', marginBottom: '20px' }} component="h1" variant="h5">
                        Welcome to RC Projects!
                    </Typography>
                    <Typography variant="body2">Please authorize using your Recurse Center data to continue</Typography>
                    <Button
                        href="http://localhost:4000/auth"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                    >
                        Authorize
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default Auth;
