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

    const URL =
        /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                title: Yup.string().max(160, 'must be 160 characters or less').required('title is required'),
                description: Yup.string()
                    .min(20, 'must be 20 characters or longer')
                    .max(480, 'must be 480 characters or less')
                    .notRequired(),
                githubLink: Yup.string().matches(URL, 'Enter a valid url').notRequired(),
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
