import React, { useState } from 'react';
import { OptionsType, ValueType } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { FieldProps } from 'formik';

import { ObjectId } from 'mongoose';

export interface ITagFromClient {
    _id?: ObjectId;
    value: string;
}

export interface ITagOption {
    label: string;
    value: ITagFromClient;
}

export interface CustomSelectProps extends FieldProps {
    options: OptionsType<ITagOption>;
    initSelections?: OptionsType<ITagOption>;
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
    const [creatableOptions, setCreatableOptions] = useState(options);

    const onChange = (option: ValueType<ITagOption | ITagOption[], true>) => {
        form.setFieldValue(
            field.name,
            (option as ITagOption[]).map((item: ITagOption) => item.value),
        );
    };

    const onCreateOption = (string: string) => {
        const newValue = {
            label: string,
            value: {
                value: string,
            },
        };
        setCreatableOptions([...creatableOptions, newValue]);
        form.setFieldValue(field.name, [...field.value, newValue.value]);
    };

    // this can probably be trimmed down
    const getValue = () => {
        if (!field.value) {
            return isMulti ? [] : ('' as any);
        }
    };

    return (
        <CreatableSelect
            name={field.name}
            defaultValue={initSelections}
            value={field.value ? initSelections : getValue()}
            onChange={onChange}
            onCreateOption={onCreateOption}
            placeholder={placeholder}
            options={creatableOptions}
            isMulti={isMulti}
            isClearable
        />
    );
};

export default CustomMultiSelect;
