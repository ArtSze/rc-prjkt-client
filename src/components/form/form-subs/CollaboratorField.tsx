import React from 'react';
import { ErrorMessage, Field } from 'formik';
// import { useQueryClient } from 'react-query';

import CustomMultiSelect from './CustomMultiSelect';
import { IFormikLabelProps } from './FormFields';

import useUsers from '../../../hooks/useUsers';
import { IUser } from '../../../types';
import { format } from 'prettier';

export const CollaboratorField = ({ label, field, ...props }: IFormikLabelProps) => {
    // const queryClient = useQueryClient();
    const { data, isLoading, isError, isSuccess } = useUsers();

    if (isError) {
        return <div>Error</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isSuccess && data) {
        const collaborators = data.map((u: IUser) => {
            return {
                label: `${u.first_name} ${u.last_name}`,
                value: {
                    _id: u._id,
                    first_name: u.first_name,
                    last_name: u.last_name,
                },
            };
        });
        return (
            <div>
                <label htmlFor={field.name}>{label}</label>
                <Field name={field.name} value={field.value} component={CustomMultiSelect} options={collaborators} />
                <ErrorMessage name={field.name} />
            </div>
        );
    }
};
