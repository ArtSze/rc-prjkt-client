import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import Select from 'react-select';

export interface IFormikLabelProps extends FieldProps {
    label: string;
    placeholder?: string;
}

export const TextField = ({ label, placeholder, field }: IFormikLabelProps) => (
    <div>
        <label htmlFor={field.name}>{label}</label>
        <Field placeholder={placeholder} {...field} type="text" />
        <ErrorMessage name={field.name} />
    </div>
);

export const ActiveField = ({ label, placeholder, field }: IFormikLabelProps) => {
    const options = [
        { value: true, label: 'true' },
        { value: false, label: 'false' },
    ];

    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <Field {...field} component={Select} options={options} />
            <ErrorMessage name={field.name} />
        </div>
    );
};
