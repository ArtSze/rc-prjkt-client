import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { TextField, Switch } from 'formik-material-ui';

import { Typography, FormControlLabel } from '@material-ui/core';
import { useStyles } from '../../../../static/styles';
import ErrorAlert from './ErrorAlert';

export interface IFormikLabelProps extends FieldProps {
    label: string;
    placeholder?: string;
}

export const CustomTextField = ({ label, placeholder, field }: IFormikLabelProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Field
            name={field.name}
            value={field.value}
            label={label}
            component={TextField}
            variant="outlined"
            // className={classes.projectFormEditFields}
        />
    );
};

export const ActiveField = ({ label, field }: IFormikLabelProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div>
            <FormControlLabel
                control={<Field component={Switch} name={field.name} type="checkbox" checked={field.value} />}
                label={field.value === true ? 'Active' : 'Inactive'}
            />
        </div>
    );
};
