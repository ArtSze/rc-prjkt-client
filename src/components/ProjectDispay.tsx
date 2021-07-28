import React, { useState } from 'react';
import { IProject } from '../types';
import ProjectFormEdit from './form/ProjectFormEdit';
import StaticProject from './StaticProject';
import StaticProjectCard from './StaticProjectCard';

interface ProjectsDisplayProps {
    project: IProject;
}

const ProjectDisplay = ({ project }: ProjectsDisplayProps): JSX.Element => {
    const [edit, setEdit] = useState<boolean>(false);

    if (edit) {
        return <ProjectFormEdit setEdit={setEdit} projectToEdit={project} />;
    }

    // return <StaticProject setEdit={setEdit} project={project} />;
    return <StaticProjectCard setEdit={setEdit} project={project} />;
};

export default ProjectDisplay;
