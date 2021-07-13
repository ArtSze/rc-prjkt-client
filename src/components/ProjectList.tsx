import React, { useState } from 'react';
import { IProject } from '../types';
import ProjectFormEdit from './form/ProjectFormEdit';
import Project from './Project';

interface ProjectsListProps {
    projects: IProject[];
}

const ProjectList = ({ projects }: ProjectsListProps): JSX.Element => {
    const [editProjects, setEditProjects] = useState<IProject['_id'][]>([]);

    return (
        <div className="project-list">
            <h2>ProjectList</h2>
            {projects.map((project: IProject) => {
                if (editProjects.includes(project._id)) {
                    return <ProjectFormEdit projectToEdit={project} setEditProjects={setEditProjects} />;
                } else {
                    return (
                        <div key={project._id.toString()}>
                            <Project setEditProjects={setEditProjects} project={project} />
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default ProjectList;
