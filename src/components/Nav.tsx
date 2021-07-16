import React, { useState } from 'react';
import Filter, { QueryParams } from './filter/Filter';
import MyProjects from './MyProjects';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { useStyles } from '../static/styles';

interface NavProps {
    setParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}
const Nav = ({ setParams }: NavProps): JSX.Element => {
    const [allProjects, setAllProjects] = useState<boolean>(false);
    const classes = useStyles();

    return (
        <>
            <Toolbar className={classes.navButtons}>
                <Button className={classes.button} variant="contained" onClick={() => setAllProjects(true)}>
                    All Projects
                </Button>
                <Button className={classes.button} variant="contained" onClick={() => setAllProjects(false)}>
                    My Projects
                </Button>
                {/* <MyProjects setParams={setParams} /> */}
            </Toolbar>
            {allProjects && <Filter setParams={setParams} />}
        </>
    );
};

export default Nav;
