import { Container } from '@material-ui/core';
import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }),
);

export default function Login() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            
        </Container>
    )
}