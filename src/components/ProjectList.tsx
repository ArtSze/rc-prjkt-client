import React, { useEffect } from 'react';

interface ProjectsListProps {
    // TODO: correct type
    projects: any;
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
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectList;
