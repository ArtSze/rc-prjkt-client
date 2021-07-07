import React, { useEffect } from 'react';
import { TProjects } from '../App';

interface ProjectsListProps {
    // TODO: correct type
    projects: TProjects;
}

const ProjectList = ({ projects }: ProjectsListProps): JSX.Element => {
    return (
        <div className="project-list">
            <h2>ProjectList</h2>
            {projects.map((project: any) => {
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
