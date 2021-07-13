import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import CustomSingleSelect from './CustomSingleSelect';

export interface IFormikLabelProps extends FieldProps {
    label: string;
    placeholder?: string;
}

export const TextField = ({ label, placeholder, field }: IFormikLabelProps) => (
    <div>
        <label htmlFor={field.name}>{label}</label>
        <Field name={field.name} value={field.value} placeholder={placeholder} type="text" />
        <ErrorMessage name={field.name} />
    </div>
);

export const ActiveField = ({ label, field }: IFormikLabelProps) => {
    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <Field name={field.name} type="checkbox" checked={field.value} />
            <ErrorMessage name={field.name} />
        </div>
    );
};
