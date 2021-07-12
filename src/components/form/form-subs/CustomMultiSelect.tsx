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
    initSelections?: OptionsType<ICollabOption>;
    isMulti?: boolean;
    placeholder?: string;
}

const CustomMultiSelect = ({
    placeholder,
    field,
    form,
    options,
    isMulti = true,
    initSelections,
}: CustomSelectProps) => {
    const onChange = (option: ValueType<ICollabOption | ICollabOption[], true>) => {
        form.setFieldValue(
            field.name,
            (option as ICollabOption[]).map((item: ICollabOption) => item.value),
        );
    };

    const getValue = () => {
        if (!field.value) {
            return isMulti ? [] : ('' as any);
        }
    };

    return (
        <Select
            name={field.name}
            defaultValue={initSelections}
            value={field.value ? initSelections : getValue()}
            onChange={onChange}
            placeholder={placeholder}
            options={options}
            isMulti={isMulti}
        />
    );
};

export default CustomMultiSelect;
