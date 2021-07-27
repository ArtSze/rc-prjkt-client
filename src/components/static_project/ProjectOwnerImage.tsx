import React from 'react';
import { IProject } from '../../types';
import { useStyles } from '../../static/styles';

const ProjectOwnerImage = ({ project }: { project: IProject }): JSX.Element => {
    const classes = useStyles();
    return <img className={classes.projectPhoto} src={project.owner.image_path} />;
};

export default ProjectOwnerImage;
