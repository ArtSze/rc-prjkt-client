import React from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

import ProjectForm from './form-subs/ProjectForm';
import { IProject } from '../../types';
// import { IUserFromClient } from './form-subs/CustomMultiSelect';

export interface ProjectFormEditValues {
    title: string;
    description: string;
    githubLink: string;
    // collaborators: IUserFromClient[];
    // tags: tbd
    // active: boolean;
}

// todo: initial values do not populate fields as placeholders
// active select component breaks app
// active select and collaborator select do not show selected values
// collaborator select only stores most recent choice

const ProjectFormEdit = (projectToEdit: IProject) => {
    const editMutation = useMutation((body: IProject) => axios.put(`http://localhost:4000/projects/${body._id}`, body));

    const submitEdittedProject = async (values: ProjectFormEditValues) => {
        console.log({ projectToEdit });
        console.log({ values });

        editMutation.mutate({
            ...projectToEdit,
            title: values.title,
            description: values.description,
            githubLink: values.githubLink,
        });

        // try {
        //     await axios.put(`http://localhost:4000/projects/${projectToEdit._id}`, {
        //         ...projectToEdit,
        //         title: values.title,
        //         description: values.description,
        //         githubLink: values.githubLink,
        //         // collaborators: values.collaborators,
        //         // tags: tbd
        //         // active: values.active,
        //     });
        //     // redirect to presentational form of project and give success feedback
        // } catch (e) {
        //     console.log(e);
        // }
    };

    const onCancel = () => {
        /* redirect logic to static presentational project component */
    };

    const initialValues: ProjectFormEditValues = {
        title: projectToEdit.title,
        description: projectToEdit.description,
        githubLink: projectToEdit.githubLink,
        // collaborators: projectToEdit.collaborators,
        // tags: tbd
        // active: projectToEdit.active,
    };

    if (editMutation.isSuccess) return <div>success baby!</div>;

    return (
        <div>
            <ProjectForm onSubmit={submitEdittedProject} initialValues={initialValues} onCancel={onCancel} />
            <div></div>
        </div>
    );
};

export default ProjectFormEdit;
