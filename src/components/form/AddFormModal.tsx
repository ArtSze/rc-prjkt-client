import React, { useState } from 'react';

import { IProject } from '../../types';

import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    Tooltip,
    useMediaQuery,
} from '@material-ui/core';
import ProjectFormAdd from './ProjectFormAdd';
import { FaPlus } from 'react-icons/fa';

const AddFormModal = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width: 650px)');

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
                {isSmallScreen ? <FaPlus /> : 'Add Project'}
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{'Edit Project'}</DialogTitle>
                <DialogContent>
                    <ProjectFormAdd setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddFormModal;
