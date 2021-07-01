import React from 'react';
import { projects } from '../data.json';

const ProjectList = (): JSX.Element => {
    return (
        <div className="project-list">
            <h2>ProjectList</h2>
            {projects.map((project) => {
                return (
                    // TODO: replace with project component
                    <div key={project._id}>
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                        <p>{project.githubLink}</p>
                        <p>{project.active}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectList;
