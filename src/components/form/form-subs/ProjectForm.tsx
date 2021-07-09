import React from 'react';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

import { ActiveField, TextField } from './FormFields';
import { CollaboratorField } from './CollaboratorField';
import { IProject } from '../../../types';
import { ProjectFormEditValues } from '../ProjectFormEdit';

interface Props {
    onSubmit: (values: ProjectFormEditValues) => Promise<void>;
    onCancel: () => void;
    initialValues: ProjectFormEditValues;
}

// need to create custom components for collaborators and tags within FormFields...
// collaborators' autosuggest populated by axios.get('/users')
// tags' autosuggest populated by axios.get('/tags')

const ProjectForm = ({ onSubmit, onCancel, initialValues }: Props): JSX.Element => {
    return (
        <Formik
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
                // active: Yup.bool().required(),
            })}
        >
            <Form>
                <Field label="Title" placeholder="title" name="title" component={TextField} />
                <Field label="Description" placeholder="description" name="description" component={TextField} />
                <Field label="GitHub Link" placeholder="link to GitHub repo" name="githubLink" component={TextField} />
                <Field label="Collaborators" name="collaborators" component={CollaboratorField} />
                <Field label="Active" name="active" component={ActiveField} />
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
