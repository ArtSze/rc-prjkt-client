import React from 'react';
import { IProject } from '../types';

import ProjectFormAdd from './form/ProjectFormAdd';
// import ProjectFormEdit from './form/ProjectFormEdit';

import ProjectDisplay from './ProjectDispay';

interface ProjectsListProps {
    projects: IProject[];
}

const ProjectList = ({ projects }: ProjectsListProps): JSX.Element => {
    return (
        <div className="project-list">
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
