import React from 'react';
import { ErrorMessage, Field } from 'formik';

import CustomCreatableMultiSelect, { ITagFromClient } from './generic/CustomCreatableMultiSelect';
import { IFormikLabelProps } from './generic/FormFields';

import useTags from '../../../hooks/useTags';
import Loading from '../../Loading';
import { useStyles } from '../../../static/styles';

import { Typography } from '@material-ui/core';

export const TagField = ({ label, field }: IFormikLabelProps): JSX.Element => {
    const { data, isLoading, isError, isSuccess } = useTags();
    const classes = useStyles();

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
        return <Loading />;
    }

    if (isSuccess && data) {
        const tags = convertToSelectionFormat(data);
        const initSelections = convertToSelectionFormat(field.value);

        return (
            <div className={classes.formRow}>
                <label htmlFor={field.name}>
                    <Typography>{label}</Typography>
                </label>
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

    return <div>Error</div>;
};
