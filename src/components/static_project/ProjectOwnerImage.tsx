import React from 'react';
import { IProject } from '../../types';
import { useStyles } from '../../static/styles';

const ProjectOwnerImage = ({ project }: { project: IProject }) => {
    const classes = useStyles();
    return (
        <div className={classes.staticProjectPhoto}>
            <img
                style={{
                    width: '7rem',
                    height: '7rem',
                    borderRadius: '.15rem',
                    boxShadow: '.05rem .05rem .2rem gray',
                }}
                src={project.owner.image_path}
            />
        </div>
    );
};

export default ProjectOwnerImage;
