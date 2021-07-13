import React from 'react';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

import { ActiveField, TextField } from './FormFields';
import { CollaboratorField } from './CollaboratorField';
// import { IProject } from '../../../types';
import { ProjectFormEditValues } from '../ProjectFormEdit';
import { format } from 'prettier';

interface Props {
    onSubmit: (values: ProjectFormEditValues) => Promise<void>;
    onCancel: () => void;
    initialValues: ProjectFormEditValues;
}

// need to create custom components for tags... autosuggest populated by axios.get('/tags')

const ProjectForm = ({ onSubmit, onCancel, initialValues }: Props): JSX.Element => {
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
            <Form>
                <Field name="title" label="Title" placeholder={initialValues.title} component={TextField} />
                <Field name="description" label="Description" placeholder="description" component={TextField} />
                <Field
                    name="githubLink"
                    label="GitHub Link"
                    placeholder="link to GitHub Repository"
                    component={TextField}
                />
                <Field name="collaborators" label="Collaborators" component={CollaboratorField} />
                <Field name="active" label="Active" component={ActiveField} />
                {/* autosuggest for tags */}
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default ProjectForm;
