import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';

import { Typography, Grid } from '@material-ui/core';
import { useStyles } from '../../../../static/styles';
import ErrorAlert from './ErrorAlert';

export interface IFormikLabelProps extends FieldProps {
    label: string;
    placeholder?: string;
}

export const TextField = ({ label, placeholder, field }: IFormikLabelProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item container direction="row">
                <label htmlFor={field.name}>
                    <Typography variant="subtitle2">{label}</Typography>
                </label>
                <ErrorMessage name={field.name}>{(msg) => <ErrorAlert msg={msg} />}</ErrorMessage>
            </Grid>
            <Grid item>
                <Field
                    name={field.name}
                    value={field.value}
                    placeholder={placeholder}
                    type="text"
                    className={classes.projectFormEditFields}
                />
            </Grid>
        </Grid>
    );
};

export const ActiveField = ({ label, field }: IFormikLabelProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div>
            <label htmlFor={field.name}>
                <Typography variant="subtitle2">{label}</Typography>
            </label>
            <Field name={field.name} type="checkbox" checked={field.value} className={classes.projectFormCheckFields} />
            <ErrorMessage name={field.name}>{(msg) => <ErrorAlert msg={msg} />}</ErrorMessage>
        </div>
    );
};
