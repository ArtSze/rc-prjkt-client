import React from 'react';
import { IProject } from '../types';

import ProjectDisplay from './ProjectDispay';

interface ProjectsListProps {
    projects: IProject[];
}

const ProjectList = ({ projects }: ProjectsListProps): JSX.Element => {
    return (
        <div>
            {projects.map((project: IProject) => {
                return (
                    <div key={project._id.toString()}>
                        <ProjectDisplay project={project} />
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectList;
