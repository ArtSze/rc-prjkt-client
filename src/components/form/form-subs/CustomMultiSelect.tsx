import React from 'react';
import Select, { OptionsType, ValueType } from 'react-select';
import { FieldProps } from 'formik';

import { ObjectId } from 'mongoose';

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
    placeholder?: string;
}

const CustomMultiSelect = ({ placeholder, field, form, options, isMulti = true }: CustomSelectProps) => {
    const initSelections = field.value.map((val: IUserFromClient) => {
        return {
            label: `${val.first_name} ${val.last_name}`,
            value: {
                _id: val._id,
                first_name: val.first_name,
                last_name: val.last_name,
            },
        };
    });

    const onChange = (option: ValueType<ICollabOption | ICollabOption[], true>) => {
        form.setFieldValue(
            field.name,
            (option as ICollabOption[]).map((item: ICollabOption) => item.value),
        );
    };

    return (
        <Select
            name={field.name}
            value={initSelections}
            onChange={onChange}
            placeholder={placeholder}
            options={options}
            isMulti={isMulti}
        />
    );
};

export default CustomMultiSelect;
