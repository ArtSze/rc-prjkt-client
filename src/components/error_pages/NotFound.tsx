import React from 'react';
import { AppBar, Avatar, Button, Container, Hidden, Typography } from '@material-ui/core';
import { useStyles } from '../../static/styles';
import logo from '../../static/images/rc-logo.png';

const NotFound = (): JSX.Element => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.appBar} position="fixed">
                <div className={classes.appBarLeft}>
                    <Avatar variant="square" alt="logo" src={logo}></Avatar>
                    <Hidden xsDown>
                        <Typography component="h1" variant="h6">
                            RC-Prjkt
                        </Typography>
                    </Hidden>
                </div>
                <div className={classes.appBarRight}>
                    <Button className={classes.navButton} variant="contained" color="secondary" href="/home">
                        Home
                    </Button>
                </div>
            </AppBar>
            <Container maxWidth="sm" className={classes.notFound}>
                <Typography variant="h2" component="h1">
                    404: Not Found
                </Typography>
                <Button href="/home" variant="contained" color="secondary">
                    Home
                </Button>
            </Container>
        </>
    );
};

export default NotFound;
