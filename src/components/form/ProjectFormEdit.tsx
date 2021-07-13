import React, { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

import ProjectForm from './form-subs/ProjectForm';
import { IProject } from '../../types';
import { IUserFromClient } from './form-subs/CustomMultiSelect';

interface ProjectFormEditProps {
    projectToEdit: IProject;
    setEdit: Dispatch<SetStateAction<boolean>>;
}

export interface ProjectFormEditValues {
    title: string;
    description: string;
    githubLink: string;
    collaborators: IUserFromClient[];
    // tags: tbd
    active: boolean;
}

const ProjectFormEdit = ({ projectToEdit, setEdit }: ProjectFormEditProps): JSX.Element => {
    const editMutation = useMutation((body: IProject) => axios.put(`http://localhost:4000/projects/${body._id}`, body));

    const submitEdittedProject = async (values: ProjectFormEditValues) => {
        console.log({ values });

        editMutation.mutate({
            ...projectToEdit,
            title: values.title,
            description: values.description,
            githubLink: values.githubLink,
            collaborators: values.collaborators,
            active: values.active,
        });

        setEdit((prevState: boolean) => !prevState);
    };

    const onCancel = () => {
        setEdit((prevState: boolean) => !prevState);
    };

    const initialValues: ProjectFormEditValues = {
        title: projectToEdit.title || '',
        description: projectToEdit.description || '',
        githubLink: projectToEdit.githubLink || '',
        collaborators: projectToEdit.collaborators || [],
        // tags: tbd
        active: projectToEdit.active || true,
    };

    if (editMutation.isSuccess) return <div>success baby!</div>;

    return (
        <div>
            <ProjectForm onSubmit={submitEdittedProject} initialValues={initialValues} onCancel={onCancel} />
        </div>
    );
};

export default ProjectFormEdit;
