import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../../../static/styles';

const ErrorAlert = ({ msg }: { msg: string }) => {
    const classes = useStyles();
    return (
        <Typography variant="body2" className={classes.formErrorText}>
            {msg}
        </Typography>
    );
};

export default ErrorAlert;
