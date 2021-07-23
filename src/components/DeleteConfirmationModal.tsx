import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

// import { useDeleteProjects } from '../mutations/useDeleteProject';
import { axiosInstance } from '../utils/axiosInstance';
import { IProject } from '../types';
import constants from '../utils/constants';

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    IconButton,
} from '@material-ui/core';
import { IconContext } from 'react-icons';
import { BsTrash } from 'react-icons/bs';

const DeleteConfirmationModal = (project: IProject): JSX.Element => {
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient();

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteAndClose = () => {
        handleClose();
        deleteMutation.mutate(project);
        // useDeleteProjects(project);
    };

    return (
        <div>
            <IconContext.Provider value={{ color: 'red', className: 'global-class-name' }}>
                <IconButton onClick={handleClickOpen}>
                    <BsTrash size={17} />
                </IconButton>
            </IconContext.Provider>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{'Delete Project'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you would like to delete this project listing? This action cannot be undone and
                        this listing will be gone forever.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={deleteAndClose} color="primary" variant="outlined" autoFocus>
                        Confirm Deletion
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteConfirmationModal;