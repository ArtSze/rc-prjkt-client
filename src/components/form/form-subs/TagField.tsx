import React from 'react';
import { ErrorMessage, Field } from 'formik';
// import { useQueryClient } from 'react-query';

import CustomCreatableMultiSelect, { ITagFromClient } from './generic/CustomCreatableMultiSelect';
import { IFormikLabelProps } from './generic/FormFields';

import useTags from '../../../hooks/useTags';

export const TagField = ({ label, field }: IFormikLabelProps) => {
    // const queryClient = useQueryClient();
    const { data, isLoading, isError, isSuccess } = useTags();

    const convertToSelectionFormat = (arr: ITagFromClient[]) => {
        return arr.map((t) => {
            return {
                label: `${t.value}`,
                value: {
                    _id: `${t._id}`,
                    value: `${t.value}`,
                },
            };
        });
    };

    if (isError) {
        return <div>Error</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isSuccess && data) {
        const tags = convertToSelectionFormat(data);
        const initSelections = convertToSelectionFormat(field.value);

        return (
            <div>
                <label htmlFor={field.name}>{label}</label>
                <Field
                    name={field.name}
                    value={field.value}
                    component={CustomCreatableMultiSelect}
                    options={tags}
                    initSelections={initSelections}
                />
                <ErrorMessage name={field.name} />
            </div>
        );
    }
};
