import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';

import { Typography } from '@material-ui/core';
import { useStyles } from '../../../../static/styles';
import ErrorAlert from './ErrorAlert';

export interface IFormikLabelProps extends FieldProps {
    label: string;
    placeholder?: string;
}

export const TextField = ({ label, placeholder, field }: IFormikLabelProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div>
            <label htmlFor={field.name}>
                <Typography variant="subtitle2">{label}</Typography>
            </label>
            <Field name={field.name} value={field.value} placeholder={placeholder} type="text" />
            <ErrorMessage name={field.name}>{(msg) => <ErrorAlert msg={msg} />}</ErrorMessage>
        </div>
    );
};

export const ActiveField = ({ label, field }: IFormikLabelProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div>
            <label htmlFor={field.name}>
                <Typography variant="subtitle2">{label}</Typography>
            </label>
            <Field name={field.name} type="checkbox" checked={field.value} />
            <ErrorMessage name={field.name}>{(msg) => <ErrorAlert msg={msg} />}</ErrorMessage>
        </div>
    );
};
