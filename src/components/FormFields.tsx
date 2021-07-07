import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import Select, { OptionsType, ValueType } from 'react-select';

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

// Tag needs creatable multi-select... options are of type ITag (so essentially just objects with a value property)
// Collaborator needs simple multiselect options are objects containgin "first name" and "last name" props

interface Option {
    label: string;
    value: string /* make this a user object */;
}

interface CustomSelectProps extends FieldProps {
    options: OptionsType<Option>;
    isMulti?: boolean;
    className?: string;
    placeholder?: string;
}

export const CustomMultiSelect = ({
    className,
    placeholder,
    field,
    form,
    options,
    isMulti = true,
}: CustomSelectProps) => {
    const onChange = (option: ValueType<Option | Option[], boolean>) => {
        form.setFieldValue(
            field.name,
            isMulti ? (option as Option[]).map((item: Option) => item.value) : (option as Option).value,
        );
    };

    const getValue = () => {
        if (options) {
            return isMulti
                ? options.filter((option) => field.value.indexOf(option.value) >= 0)
                : options.find((option) => option.value === field.value);
        } else {
            return isMulti ? [] : ('' as any);
        }
    };

    return (
        <Select
            className={className}
            name={field.name}
            value={getValue()}
            onChange={onChange}
            placeholder={placeholder}
            options={options}
            isMulti={isMulti}
        />
    );
};
