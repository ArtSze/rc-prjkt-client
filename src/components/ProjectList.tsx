import React from 'react';
import { IProject } from '../types';

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
                    <div key={project._id}>
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                        <p>{project.githubLink}</p>
                        <p>{project.active}</p>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectList;
