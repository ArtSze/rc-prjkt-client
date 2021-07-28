import React, { Dispatch, SetStateAction } from 'react';
import { IProject, IProjectOwnerCheck } from '../types';
import { useStore, AppState } from './Home';
import { formatURL } from '../utils/formatUrl';

import { SiGithub, SiZulip } from 'react-icons/si';
import { FaTag } from 'react-icons/fa';
import {
    Button,
    Card,
    CardContent,
    Typography,
    Chip,
    Link,
    Avatar,
    IconButton,
    Divider,
    Container,
    Grid,
    CardHeader,
} from '@material-ui/core';
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
        setEdit((prevState) => !prevState);
    }

    const ownerProject = project as IProjectOwnerCheck;

    const tags = (
        <Container disableGutters className={classes.marginBottom}>
            <Typography variant="subtitle2" gutterBottom>
                Tags
            </Typography>
            {project.tags.length ? (
                <Grid>
                    {project.tags.map((tag) => {
                        return (
                            <Chip
                                className={classes.chip}
                                key={tag._id.toString()}
                                icon={<FaTag />}
                                label={`${tag.value}`}
                                onClick={() => {
                                    tagFilter ? setTagFilter([...tagFilter, tag.value]) : setTagFilter([tag.value]);
                                }}
                            />
                        );
                    })}
                </Grid>
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
                <Grid>
                    {project.collaborators.map((collaborator) => {
                        return (
                            <Chip
                                className={classes.chip}
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
                </Grid>
            ) : (
                <Typography variant="body2" color="textSecondary">
                    No Collaborators
                </Typography>
            )}
        </Container>
    );

    return (
        <Card className={classes.staticProject}>
            <CardHeader
                disableTypography
                title={
                    <Grid container alignItems="center" className={classes.bigGridGap}>
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
                    </Grid>
                }
                avatar={<ProjectOwnerImage project={project}></ProjectOwnerImage>}
                action={
                    <Grid container alignItems="center">
                        {ownerProject.isOwner && (
                            <>
                                <div>
                                    <Button onClick={toggleEdit} size="small" color="primary" variant="outlined">
                                        Edit
                                    </Button>
                                </div>
                                <DeleteConfirmationModal {...project} />
                            </>
                        )}
                        <IconButton href={formatURL(project.githubLink)} target="_blank" rel="noreferrer">
                            <SiGithub />
                        </IconButton>
                        <IconButton
                            rel="noreferrer"
                            target="_blank"
                            href={'https://recurse.zulipchat.com/#narrow/pm-with/' + project.owner.zulip_id}
                        >
                            <SiZulip />
                        </IconButton>
                    </Grid>
                }
                subheader={
                    <>
                        <Link className={classes.cursorPointer} onClick={() => setOwnerFilter(project.owner.rcId)}>
                            <Typography variant="body2" color="textSecondary">
                                {`${project.owner.first_name} ${project.owner.last_name} (${project.owner.batch})`}
                            </Typography>
                        </Link>
                    </>
                }
            ></CardHeader>
            <CardContent>
                <Container className={classes.staticProjectDetails}>
                    <Divider className={classes.staticProjectDivider} />
                    <Typography variant="body1" component="p" paragraph>
                        {project.description}
                    </Typography>
                    <Grid container>
                        <Grid xs={12} lg={4} item>
                            {collaborators}
                        </Grid>
                        <Grid xs={12} lg={8} item>
                            {tags}
                        </Grid>
                    </Grid>
                </Container>
            </CardContent>
        </Card>
    );
};

export default StaticProject;
