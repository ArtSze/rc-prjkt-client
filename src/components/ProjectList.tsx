import React from 'react';
import { IProject } from '../types';
import ProjectFormEdit from './form/ProjectFormEdit';

interface ProjectsListProps {
    projects: IProject[];
}

const ProjectList = ({ projects }: ProjectsListProps): JSX.Element => {
    return (
        <div className="project-list">
            <h2>ProjectList</h2>
            {projects.map((project: IProject) => {
                return (
                    // TODO: replace with project component
                    <div key={String(project._id)}>
                        <p>
                            {project.title} {'  |  '} {project.owner.first_name} {project.owner.last_name}
                            {'  |  '}
                            {project.active ? 'Active' : 'Inactive'}
                        </p>
                        {/* <p>{project.githubLink}</p> */}
                        <p>{project.description}</p>
                        <hr />
                    </div>
                );
            })}
            <ProjectFormEdit {...projects[0]} />
        </div>
    );
};

export default ProjectList;
