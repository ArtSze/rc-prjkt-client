import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../../../static/styles';

const ErrorAlert = ({ msg }: { msg: string }) => {
    const classes = useStyles();
    return (
        <span className={classes.formError}>
            <Typography variant="body2">{msg}</Typography>
        </span>
    );
};

export default ErrorAlert;
