import React from 'react';
<<<<<<< Updated upstream
import { IProject } from '../types';

interface ProjectsListProps {
    projects: IProject[];
=======
import { TProject } from '../RCPrjkts';

interface ProjectsListProps {
    projects: TProject[] | undefined;
>>>>>>> Stashed changes
}

const ProjectList = ({ projects }: ProjectsListProps): JSX.Element => {
    return (
        <div className="project-list">
            <h2>ProjectList</h2>
<<<<<<< Updated upstream
            {projects.map((project: IProject) => {
                return (
                    // TODO: replace with project component
                    <div key={String(project._id)}>
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                        <p>{project.githubLink}</p>
                        <p>{project.active}</p>
                        <hr />
                    </div>
                );
            })}
=======
            {projects ? (
                projects.map((project: TProject) => {
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
                })
            ) : (
                <p>No projects</p>
            )}
>>>>>>> Stashed changes
        </div>
    );
};

export default ProjectList;
