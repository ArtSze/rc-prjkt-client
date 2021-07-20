import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { FaGithub } from 'react-icons/fa';
import { useStyles } from '../static/styles';

export default function Footer(): JSX.Element {
    const classes = useStyles();

    return (
        // <div className={classes.root}>
        <footer className={classes.footer}>
            {/* <Container className={classes.footerLinks}> */}
            <Link href="http://www.recurse.com" title="Made with love at the Recurse Center">
                <img
                    alt="Recurse Center Logo"
                    src="https://cloud.githubusercontent.com/assets/2883345/11322973/9e557144-910b-11e5-959a-8fdaaa4a88c5.png"
                    height="12px"
                />
            </Link>
            <Link href="https://github.com/ArtSze/rc-prjkt-client">
                <Typography variant="body1">
                    <FaGithub /> View source code
                </Typography>
            </Link>
            {/* </Container> */}
        </footer>
        // </div>
    );
}
