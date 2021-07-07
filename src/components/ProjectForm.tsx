import React from 'react';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

import { TextField } from './FormFields';
import { IProject } from '../types';

interface Props {
    onSubmit: (values: IProject) => void;
    onCancel: () => void;
    initialValues: IProject;
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
                active: Yup.bool().required(),
            })}
        >
            <Form>
                <Field label="Title" placeholder="title" name="title" component={TextField} />
                <Field label="Description" placeholder="description" name="description" component={TextField} />
                <Field label="GitHub Link" placeholder="link to GitHub repo" name="githubLink" component={TextField} />
                {/* autosuggest for collaborators */}
                {/* autosuggest for tags */}
                {/* select for active/inactive */}
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default ProjectForm;
