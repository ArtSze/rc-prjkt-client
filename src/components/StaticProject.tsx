import React, { Dispatch, SetStateAction } from 'react';
import { IProject, IProjectOwnerCheck } from '../types';
import { useStore, AppState } from './Home';
import { IconContext } from 'react-icons';
import { SiGithub, SiZulip } from 'react-icons/si';
import { BsPencilSquare } from 'react-icons/bs';
import { FaTag } from 'react-icons/fa';
import { Paper, Typography, Chip, Link, Avatar, IconButton, Divider, Container, Grid, Hidden } from '@material-ui/core';
import { useStyles } from '../static/styles';
import DeleteConfirmationModal from './static_project/DeleteConfirmationModal';
import ProjectOwnerImage from './static_project/ProjectOwnerImage';

interface StaticProjectProps {
    project: IProject;
    setEdit: Dispatch<SetStateAction<boolean>>;
}

const StaticProject = ({ project, setEdit }: StaticProjectProps): JSX.Element => {
    const classes = useStyles();

    const setOwnerFilter = useStore((state: AppState) => state.setOwnerFilter);
    const setTagFilter = useStore((state: AppState) => state.setTagFilter);
    const tagFilter = useStore((state: AppState) => state.tagFilter);

    function toggleEdit() {
        setEdit((prevState: boolean) => !prevState);
    }

    const ownerProject = project as IProjectOwnerCheck;

    const titleBar = (
        <div className={classes.staticProjectRowSplit}>
            <div className={classes.staticProjectTitleStatus}>
                {/* TODO: update component type to appropriate header for accessibility purposes */}
                <Typography variant="h6">{project.title}</Typography>
                {project.active ? (
                    <Typography variant="button" color="primary">
                        active
                    </Typography>
                ) : (
                    <Typography variant="button" color="error">
                        inactive
                    </Typography>
                )}
                {ownerProject.isOwner ? (
                    <div className={classes.ownerIcons}>
                        <Chip onClick={() => setOwnerFilter(project.owner.rcId)} label="OWNER"></Chip>
                        <IconContext.Provider value={{ color: 'blue', className: 'global-class-name' }}>
                            <IconButton size="small" onClick={toggleEdit}>
                                <BsPencilSquare />
                            </IconButton>
                        </IconContext.Provider>
                        <DeleteConfirmationModal {...project} />
                    </div>
                ) : (
                    <Chip
                        size="medium"
                        avatar={
                            <Avatar
                                alt={`${project.owner.first_name} ${project.owner.last_name}`}
                                src={project.owner.image_path}
                            ></Avatar>
                        }
                        label={`${project.owner.first_name} ${project.owner.last_name} (${project.owner.batch})`}
                        onClick={() => setOwnerFilter(project.owner.rcId)}
                    />
                    // <Link
                    //     color="inherit"
                    //     className={classes.staticProjectOwnerName}
                    // >
                    //     <Typography variant="body1">{`${project.owner.first_name} ${project.owner.last_name}`}</Typography>
                    //     <Typography variant="body2">{`(${project.owner.batch})`}</Typography>
                    // </Link>
                )}
            </div>
            <div>
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
            </div>
        </div>
    );

    const tags = (
        <Container disableGutters className={classes.marginBottom}>
            <Typography variant="subtitle2" gutterBottom>
                Tags
            </Typography>
            {project.tags.length ? (
                <div className={classes.chips}>
                    {project.tags.map((tag) => {
                        return (
                            <Chip
                                className={classes.tagChip}
                                key={tag._id.toString()}
                                icon={<FaTag />}
                                label={`${tag.value}`}
                                onClick={() => {
                                    tagFilter ? setTagFilter([...tagFilter, tag.value]) : setTagFilter([tag.value]);
                                }}
                            />
                        );
                    })}
                </div>
            ) : (
                <Typography variant="body2" color="textSecondary">
                    No Tags
                </Typography>
            )}
        </Container>
    );

    const collaborators = (
        <Container disableGutters className={classes.marginBottom}>
            <Typography variant="subtitle2" gutterBottom>
                Collaborators
            </Typography>
            {project.collaborators.length ? (
                <div className={classes.chips}>
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
                                onClick={() => {
                                    setOwnerFilter(collaborator.rcId);
                                }}
                            />
                        );
                    })}
                </div>
            ) : (
                <Typography variant="body2" color="textSecondary">
                    No Collaborators
                </Typography>
            )}
        </Container>
    );

    return (
        <Paper elevation={2} className={classes.staticProject}>
            {/* <Hidden mdDown>
                <ProjectOwnerImage project={project} />
            </Hidden> */}
            <div className={classes.staticProjectInfo}>
                {titleBar}
                <Divider className={classes.marginBottom} />
                <Grid direction="column">
                    <Grid item>
                        <Typography variant="body2" paragraph>
                            {project.description}
                        </Typography>
                    </Grid>
                    <Grid direction="row" container>
                        <Grid xs={12} md={3} item>
                            {collaborators}
                        </Grid>
                        <Grid xs={12} lg={9} item>
                            {tags}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    );
};

export default StaticProject;
