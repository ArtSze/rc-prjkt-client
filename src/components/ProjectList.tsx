import React from 'react';
import { IProject } from '../types';
import NoProjects from './error_pages/NoProjects';

import ProjectDisplay from './ProjectDispay';

interface ProjectsListProps {
    projects: IProject[];
}

const ProjectList = ({ projects }: ProjectsListProps): JSX.Element => {
    if (projects.length < 1) {
        return <NoProjects />;
    }

    return (
        <main className="project-list">
            {projects.map((project: IProject) => {
                return <ProjectDisplay key={project._id.toString()} project={project} />;
            })}
        </main>
    );
};

export default ProjectList;
