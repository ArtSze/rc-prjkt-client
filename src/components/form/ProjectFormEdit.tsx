import React, { Dispatch, SetStateAction } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance } from '../../utils/axiosInstance';
import constants from '../../utils/constants';
import ProjectForm from './form-subs/ProjectForm';
import { IProject, IProjectEdit } from '../../types';
import { ProjectFormSubmitValues } from './ProjectFormAdd';
import ProjectOwnerImage from '../static_project/ProjectOwnerImage';

import { useStyles } from '../../static/styles';
import { Paper } from '@material-ui/core';

interface ProjectFormEditProps {
    projectToEdit: IProject;
    setEdit: Dispatch<SetStateAction<boolean>>;
}
const ProjectFormEdit = ({ projectToEdit, setEdit }: ProjectFormEditProps): JSX.Element => {
    const classes = useStyles();
    const queryClient = useQueryClient();
    const editMutation = useMutation(
        (body: IProjectEdit) => axiosInstance.put(`/projects/${projectToEdit._id}`, body, { withCredentials: true }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(constants.projects);
            },
        },
    );

    const submitEdittedProject = async (values: ProjectFormSubmitValues) => {
        // console.log({ values });

        editMutation.mutate({
            ...projectToEdit,
            title: values.title,
            description: values.description,
            githubLink: values.githubLink,
            collaborators: values.collaborators,
            tags: values.tags,
            active: values.active,
        });

        // maybe incorporate visual feedback for successful submission?
        setEdit((prevState: boolean) => !prevState);
    };

    const onCancel = () => {
        setEdit((prevState: boolean) => !prevState);
    };

    const initialValues: ProjectFormSubmitValues = {
        title: projectToEdit.title || '',
        description: projectToEdit.description || '',
        githubLink: projectToEdit.githubLink || '',
        collaborators: projectToEdit.collaborators || [],
        tags: projectToEdit.tags || [],
        active: projectToEdit.active || true,
    };

    if (editMutation.isSuccess) return <div>success!</div>;

    return (
        <div>
            <Paper className={classes.projectFormContainer}>
                <ProjectOwnerImage project={projectToEdit} />
                <span className={classes.projectFormEditFields}>
                    <ProjectForm onSubmit={submitEdittedProject} initialValues={initialValues} onCancel={onCancel} />
                </span>
            </Paper>
        </div>
    );
};

export default ProjectFormEdit;
