import React, { Dispatch, SetStateAction } from 'react';
import { IProject } from '../types';
import { SiGithub, SiZulip } from 'react-icons/si';
import { BsPencilSquare } from 'react-icons/bs';
import { FaTag, FaUser } from 'react-icons/fa';

interface StaticProjectProps {
    project: IProject;
    setEdit: Dispatch<SetStateAction<boolean>>;
}

const StaticProject = ({ project, setEdit }: StaticProjectProps): JSX.Element => {
    function handleClick() {
        setEdit((prevState: boolean) => !prevState);
    }

    return (
        <div className="project">
            <div className="project-title">
                <span style={{ marginRight: '5px', fontWeight: 'bold' }}>Title</span>
                <span>{project.title}</span>
                <span style={{ marginRight: '30px' }}></span>
                <a style={{ marginRight: '3px' }} href={project.githubLink}>
                    <SiGithub />
                </a>
                <a
                    style={{ marginRight: '3px' }}
                    rel="noreferrer"
                    target="_blank"
                    href={'https://recurse.zulipchat.com/#narrow/pm-with/' + project.owner.zulip_id}
                >
                    <SiZulip />
                </a>
                <a onClick={handleClick} href="#">
                    <BsPencilSquare />
                </a>
            </div>
            <div className="project-owner">
                <span style={{ marginRight: '5px', fontWeight: 'bold' }}>Owner</span>
                <img style={{ width: '25px', height: '25px' }} src={project.owner.image_path} />
                <span>{project.owner.first_name + ' ' + project.owner.last_name}</span>
            </div>
            <div className="project-description">
                <span style={{ marginRight: '5px', fontWeight: 'bold' }}>Description</span>
                <span>{project.description}</span>
            </div>
            <div className="project-collaborators">
                <span style={{ marginRight: '5px', fontWeight: 'bold' }}>Collaborators</span>
                {project.collaborators.length ? (
                    project.collaborators.map((collaborator) => {
                        return (
                            <span style={{ marginRight: '5px' }} key={collaborator._id.toString()}>
                                <FaUser style={{ marginRight: '3px' }} />
                                {collaborator.first_name + ' ' + collaborator.last_name}
                            </span>
                        );
                    })
                ) : (
                    <span style={{ fontStyle: 'italic', color: 'gray' }}>No Collaborators</span>
                )}
            </div>
            <div className="project-tags">
                <span style={{ marginRight: '5px', fontWeight: 'bold' }}>Tags</span>
                {project.tags.length ? (
                    project.tags.map((tag) => {
                        return (
                            <span style={{ marginRight: '5px' }} key={tag._id.toString()}>
                                <FaTag style={{ marginRight: '3px' }} />
                                {tag.value}
                            </span>
                        );
                    })
                ) : (
                    <span style={{ fontStyle: 'italic', color: 'gray' }}>No Tags</span>
                )}
            </div>
            <div className="project-status">
                <span style={{ marginRight: '5px', fontWeight: 'bold' }}>Status</span>
                <span>{project.active ? 'Active' : 'Inactive'}</span>
            </div>
            <hr />
        </div>
    );
};

export default StaticProject;
