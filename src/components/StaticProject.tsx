import React, { Dispatch, SetStateAction } from 'react';
import { IProject, IProjectOwnerCheck } from '../types';
import { axiosInstance } from '../utils/axiosInstance';
import { useMutation, useQueryClient } from 'react-query';
import constants from '../utils/constants';

import { IconContext } from 'react-icons';
import { SiGithub, SiZulip } from 'react-icons/si';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { FaTag, FaUser } from 'react-icons/fa';
import { Paper, Typography, Chip } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { useStyles } from '../static/styles';

interface StaticProjectProps {
    project: IProject;
    setEdit: Dispatch<SetStateAction<boolean>>;
}

const StaticProject = ({ project, setEdit }: StaticProjectProps): JSX.Element => {
    const queryClient = useQueryClient();
    const classes = useStyles();

    function handleClick() {
        setEdit((prevState: boolean) => !prevState);
    }

    const deleteMutation = useMutation(
        (project: IProject) =>
            axiosInstance.delete(`projects/${project._id}`, {
                data: project,
                withCredentials: true,
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(constants.projects);
            },
        },
    );

    const ownerProject = project as IProjectOwnerCheck;

    return (
        <Paper className={classes.staticProject} /* variant="outlined" */>
            <div className={classes.staticProjectPhoto}>
                <img style={{ width: '7rem', height: '7rem', borderRadius: '.25rem' }} src={project.owner.image_path} />
            </div>
            <div className={classes.staticProjectInfo}>
                <div className={classes.staticProjectAboveDivider}>
                    <div className={classes.staticProjectRow}>
                        <span className={classes.staticProjectRowSplit}>
                            <span className={classes.staticProjectTitleStatus}>
                                <span>
                                    <Typography variant="h6">{project.title}</Typography>
                                </span>
                                <span>
                                    <div>
                                        {project.active ? (
                                            <Typography
                                                variant="body2"
                                                style={{ color: 'green' }}
                                                className={classes.staticProjectValue}
                                            >
                                                active
                                            </Typography>
                                        ) : (
                                            <Typography
                                                variant="body2"
                                                style={{ color: 'red' }}
                                                className={classes.staticProjectValue}
                                            >
                                                inactive
                                            </Typography>
                                        )}
                                    </div>
                                </span>
                                {ownerProject.isOwner ? (
                                    <>
                                        <Typography
                                            className={classes.staticProjectOwnerName}
                                            variant="body1"
                                        >{`owned project`}</Typography>
                                        <IconContext.Provider value={{ color: 'blue', className: 'global-class-name' }}>
                                            <a onClick={handleClick} href="#">
                                                <BsPencilSquare size={25} className={classes.iconLink} />
                                            </a>
                                        </IconContext.Provider>
                                        <IconContext.Provider value={{ color: 'red', className: 'global-class-name' }}>
                                            <a onClick={() => deleteMutation.mutate(project)} href="#">
                                                <BsTrash size={25} className={classes.iconLink} />
                                            </a>
                                        </IconContext.Provider>
                                    </>
                                ) : (
                                    <span className={classes.staticProjectOwnerName}>
                                        <Typography variant="body1">{`${project.owner.first_name} ${project.owner.last_name}`}</Typography>
                                        <Typography variant="body2">{`(${project.owner.batch})`}</Typography>
                                    </span>
                                )}
                            </span>

                            <span>
                                <IconContext.Provider value={{ color: 'black', className: 'global-class-name' }}>
                                    <a href={project.githubLink}>
                                        <SiGithub size={25} className={classes.iconLink} />
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href={'https://recurse.zulipchat.com/#narrow/pm-with/' + project.owner.zulip_id}
                                    >
                                        <SiZulip size={25} className={classes.iconLink} />
                                    </a>
                                </IconContext.Provider>
                            </span>
                        </span>
                    </div>
                </div>

                <Divider style={{ width: '97%', marginLeft: '1rem', marginRight: '1rem' }} />
                <div className={classes.staticProjectBelowDivider}>
                    <div className={classes.staticProjectRow}>
                        {/* <Typography variant="body2">description:</Typography> */}
                        <span /* className={classes.staticProjectValue} */>
                            <Typography variant="body2">{project.description}</Typography>
                        </span>
                    </div>
                    <div className={classes.staticProjectRow}>
                        <span className={classes.chipContainer}>
                            <span className={classes.chipSub}>
                                <Typography variant="body2">collaborators:</Typography>
                                {project.collaborators.length ? (
                                    <span className={classes.staticProjectValue}>
                                        {project.collaborators.map((collaborator) => {
                                            return (
                                                <Chip
                                                    key={collaborator._id.toString()}
                                                    variant="outlined"
                                                    icon={<FaUser />}
                                                    label={`${collaborator.first_name} ${collaborator.last_name}`}
                                                    className={classes.singleChip}
                                                    // size="small"
                                                />
                                            );
                                        })}
                                    </span>
                                ) : (
                                    <span className={classes.staticProjectValue}>
                                        <Typography variant="body2" style={{ color: 'gray' }}>
                                            No Collaborators
                                        </Typography>
                                    </span>
                                )}
                            </span>
                            <span className={classes.chipSub}>
                                <Typography variant="body2">tags:</Typography>
                                {project.tags.length ? (
                                    <span className={classes.staticProjectValue}>
                                        {project.tags.map((tag) => {
                                            return (
                                                <Chip
                                                    key={tag._id.toString()}
                                                    variant="outlined"
                                                    icon={<FaTag />}
                                                    label={`${tag.value}`}
                                                    className={classes.singleChip}
                                                    // size="small"
                                                />
                                            );
                                        })}
                                    </span>
                                ) : (
                                    <span className={classes.staticProjectValue}>
                                        <Typography style={{ color: 'gray' }}>No Tags</Typography>
                                    </span>
                                )}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default StaticProject;
