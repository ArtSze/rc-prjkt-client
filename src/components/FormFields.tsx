import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';

interface TextProps extends FieldProps {
    label: string;
    placeholder: string;
}

export const TextField = ({ label, placeholder, field }: TextProps) => (
    <div>
        <label htmlFor={field.name}>{label}</label>
        <Field placeholder={placeholder} {...field} type="text" />
        <ErrorMessage name={field.name} />
    </div>
);
