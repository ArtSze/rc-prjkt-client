import React from 'react';
import { IProjectOwnerCheck } from '../types';
import { useStyles } from '../static/styles';

// import ProjectFormAdd from './form/ProjectFormAdd';
// import ProjectFormEdit from './form/ProjectFormEdit';

import ProjectDisplay from './ProjectDispay';

interface ProjectsListProps {
    projects: IProjectOwnerCheck[];
}

const ProjectList = ({ projects }: ProjectsListProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {projects.map((project: IProjectOwnerCheck) => {
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
