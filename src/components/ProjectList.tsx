import React from 'react';
import { IProject } from '../types';
import { useStyles } from '../static/styles';

// import ProjectFormAdd from './form/ProjectFormAdd';
// import ProjectFormEdit from './form/ProjectFormEdit';

import ProjectDisplay from './ProjectDispay';

interface ProjectsListProps {
    projects: IProject[];
}

const ProjectList = ({ projects }: ProjectsListProps): JSX.Element => {
    const classes = useStyles();

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
