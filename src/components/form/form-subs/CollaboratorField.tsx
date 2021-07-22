import React from 'react';
import { ErrorMessage, Field } from 'formik';

import CustomMultiSelect, { IUserFromClient } from './generic/CustomMultiSelect';
import { IFormikLabelProps } from './generic/FormFields';

import useUsers from '../../../hooks/useUsers';

export const CollaboratorField = ({ label, field, ...props }: IFormikLabelProps) => {
    const { data, isLoading, isError, isSuccess } = useUsers();

    const convertToSelectionFormat = (arr: IUserFromClient[]) => {
        return arr.map((u) => {
            return {
                label: `${u.first_name} ${u.last_name}`,
                value: {
                    _id: u._id,
                    first_name: u.first_name,
                    last_name: u.last_name,
                    rcId: u.rcId,
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
        const collaborators = convertToSelectionFormat(data);
        const initSelections = convertToSelectionFormat(field.value);

        return (
            <div>
                <label htmlFor={field.name}>{label}</label>
                <Field
                    name={field.name}
                    value={field.value}
                    component={CustomMultiSelect}
                    options={collaborators}
                    initSelections={initSelections}
                />
                <ErrorMessage name={field.name} />
            </div>
        );
    }
};
