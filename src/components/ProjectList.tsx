import React from 'react';
import { IProject } from '../types';

import ProjectDisplay from './ProjectDispay';

interface ProjectsListProps {
    projects: IProject[];
}

const ProjectList = ({ projects }: ProjectsListProps): JSX.Element => {
    return (
        <main className="project-list">
            {projects.map((project: IProject) => {
                return <ProjectDisplay key={project._id.toString()} project={project} />;
            })}
        </main>
    );
};

export default ProjectList;
