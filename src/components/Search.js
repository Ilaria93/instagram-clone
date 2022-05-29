import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    background: '#efefef',
    'border-radius': 10,
    'box-shadow': 'unset',
    display: 'flex',
    height: 35,
    padding: '2px 4px',
    width: 250,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  }
}));

export default function Search() {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Cerca"
        inputProps={{ 'aria-label': 'Cerca' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
