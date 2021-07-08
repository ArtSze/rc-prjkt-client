import React from 'react';
import { ErrorMessage, Field } from 'formik';
// import { useQueryClient } from 'react-query';

import CustomMultiSelect from './CustomMultiSelect';
import { IFormikLabelProps } from './FormFields';

import useUsers from '../../../hooks/useUsers';
import { IUserFromClient } from './CustomMultiSelect';

export const CollaboratorField = ({ label, field, ...props }: IFormikLabelProps) => {
    // const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useUsers();
    const collaborators = data.map((u: IUserFromClient) => {
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
            <Field
                {...field}
                component={CustomMultiSelect}
                options={collaborators}
                isMulti={true}
                placeholder={`search for collaborators`}
            />
            <ErrorMessage name={field.name} />
        </div>
    );
};
