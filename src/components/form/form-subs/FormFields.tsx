import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';

export interface IFormikLabelProps extends FieldProps {
    label: string;
    placeholder: string;
}

export const TextField = ({ label, placeholder, field }: IFormikLabelProps) => (
    <div>
        <label htmlFor={field.name}>{label}</label>
        <Field placeholder={placeholder} {...field} type="text" />
        <ErrorMessage name={field.name} />
    </div>
);
