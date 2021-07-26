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
    } else {
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
    }
};

export default ProjectList;
