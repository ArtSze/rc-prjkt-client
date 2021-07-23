import React, { Dispatch, SetStateAction } from 'react';
import { IProject, IProjectOwnerCheck } from '../types';

import { useStore, AppState } from './Home';

import { IconContext } from 'react-icons';
import { SiGithub, SiZulip } from 'react-icons/si';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { FaTag } from 'react-icons/fa';
import { Paper, Typography, Chip, Link, Avatar, IconButton } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { useStyles } from '../static/styles';
import DeleteConfirmationModal from './static_project/DeleteConfirmationModal';

interface StaticProjectProps {
    project: IProject;
    setEdit: Dispatch<SetStateAction<boolean>>;
}

const StaticProject = ({ project, setEdit }: StaticProjectProps): JSX.Element => {
    const classes = useStyles();

    const setUserFilter = useStore((state: AppState) => state.setUserFilter);
    const setTagFilter = useStore((state: AppState) => state.setTagFilter);
    const tagFilter = useStore((state: AppState) => state.tagFilter);

    function toggleEdit() {
        setEdit((prevState: boolean) => !prevState);
    }

    const ownerProject = project as IProjectOwnerCheck;

    return (
        <Paper className={classes.staticProject} /* variant="outlined" */>
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
                                            <IconButton onClick={toggleEdit}>
                                                <BsPencilSquare size={17} />
                                            </IconButton>
                                        </IconContext.Provider>
                                        <DeleteConfirmationModal {...project} />
                                    </>
                                ) : (
                                    <Link
                                        color="inherit"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setUserFilter(project.owner.rcId);
                                            console.log({ ...project.owner });
                                        }}
                                        className={classes.staticProjectOwnerName}
                                    >
                                        <Typography variant="body1">{`${project.owner.first_name} ${project.owner.last_name}`}</Typography>
                                        <Typography variant="body2">{`(${project.owner.batch})`}</Typography>
                                    </Link>
                                )}
                            </span>

                            <span>
                                <IconButton href={project.githubLink}>
                                    <SiGithub />
                                </IconButton>
                                <IconButton
                                    rel="noreferrer"
                                    target="_blank"
                                    href={'https://recurse.zulipchat.com/#narrow/pm-with/' + project.owner.zulip_id}
                                >
                                    <SiZulip />
                                </IconButton>
                            </span>
                        </span>
                    </div>
                </div>

                <Divider style={{ width: '97%', marginLeft: '1rem', marginRight: '1rem' }} />
                <div className={classes.staticProjectBelowDivider}>
                    <div className={classes.staticProjectRow}>
                        <span className={classes.staticProjectDescription}>
                            <Typography variant="body2">{project.description}</Typography>
                        </span>
                    </div>
                    <div className={classes.staticProjectRow}>
                        {/* <span className={classes.chipContainer}> */}

                        <span className={classes.chipSub}>
                            <Typography variant="body2">tags:</Typography>
                            {project.tags.length ? (
                                <span className={classes.staticProjectValue}>
                                    {project.tags.map((tag) => {
                                        return (
                                            <Chip
                                                key={tag._id.toString()}
                                                icon={<FaTag />}
                                                label={`${tag.value}`}
                                                className={classes.singleChip}
                                                onClick={() => {
                                                    tagFilter
                                                        ? setTagFilter([...tagFilter, tag.value])
                                                        : setTagFilter([tag.value]);
                                                    console.log(tagFilter);
                                                }}
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
                        {/* </span> */}
                    </div>
                    <div className={classes.staticProjectRow}>
                        <span className={classes.chipSub}>
                            <Typography variant="body2">collaborators:</Typography>
                            {project.collaborators.length ? (
                                <span className={classes.staticProjectValue}>
                                    {project.collaborators.map((collaborator) => {
                                        return (
                                            <Chip
                                                key={collaborator._id.toString()}
                                                avatar={
                                                    <Avatar
                                                        alt={`${collaborator.first_name} ${collaborator.last_name}`}
                                                        src={collaborator.image_path}
                                                    ></Avatar>
                                                }
                                                label={`${collaborator.first_name} ${collaborator.last_name}`}
                                                className={classes.singleChip}
                                                onClick={() => {
                                                    setUserFilter(collaborator.rcId);
                                                    console.log({ collaborator });
                                                }}
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
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default StaticProject;
