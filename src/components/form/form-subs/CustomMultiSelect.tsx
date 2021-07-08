import React from 'react';
import Select, { OptionsType, ValueType } from 'react-select';
import { FieldProps } from 'formik';

import { ObjectId } from 'mongoose';
// Collaborator needs simple multiselect options are objects containing "first name" and "last name" props

export interface IUserFromClient {
    _id: ObjectId;
    first_name: string;
    last_name: string;
}

export interface ICollabOption {
    label: string;
    value: IUserFromClient;
}

interface CustomSelectProps extends FieldProps {
    options: OptionsType<ICollabOption>;
    isMulti?: boolean;
    className?: string;
    placeholder?: string;
}

const CustomMultiSelect = ({ className, placeholder, field, form, options, isMulti = true }: CustomSelectProps) => {
    const onChange = (option: ValueType<ICollabOption | ICollabOption[], boolean>) => {
        form.setFieldValue(
            field.name,
            isMulti
                ? (option as ICollabOption[]).map((item: ICollabOption) => item.value)
                : (option as ICollabOption).value,
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

export default CustomMultiSelect;
