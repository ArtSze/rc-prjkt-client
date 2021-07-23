import React from 'react';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

import { ActiveField, TextField } from './generic/FormFields';
import { CollaboratorField } from './CollaboratorField';
import { ProjectFormSubmitValues } from '../ProjectFormAdd';
import { TagField } from './TagField';

import { useStyles } from '../../../static/styles';

interface Props {
    onSubmit: (values: ProjectFormSubmitValues) => Promise<void>;
    onCancel: () => void;
    initialValues: ProjectFormSubmitValues;
}

const ProjectForm = ({ onSubmit, onCancel, initialValues }: Props): JSX.Element => {
    const classes = useStyles();

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                title: Yup.string().max(160, 'Must be 160 characters or less').required('title is required'),
                description: Yup.string()
                    .min(20, 'Must be 20 characters or longer')
                    .max(480, 'Must be 480 characters or less')
                    .notRequired(),
                githubLink: Yup.string().notRequired(),
                // need to figure out how to validate collaborators
                // need to figure out how to validate tags
                active: Yup.bool().notRequired(),
            })}
        >
            <Form className={classes.projectForm}>
                <Field name="title" label="Title" placeholder="title" component={TextField} />
                <Field name="description" label="Description" placeholder="description" component={TextField} />
                <Field
                    name="githubLink"
                    label="GitHub Link"
                    placeholder="link to GitHub Repository"
                    component={TextField}
                />
                <Field name="collaborators" label="Collaborators" component={CollaboratorField} />
                <Field name="tags" label="Tags" component={TagField} />
                <Field name="active" label="Active" component={ActiveField} />
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default ProjectForm;
