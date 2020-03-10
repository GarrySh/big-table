import React, { useContext, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core/';
import { store } from 'store';

const useStyles = makeStyles({
  chip: {
    backgroundColor: props => props.backgroundColor,
    color: 'white',
  },
});

const Department = ({ id }) => {
  const { state } = useContext(store);
  const { title, colorId } = state.departments[id];
  const color = state.colors[colorId];
  const props = { backgroundColor: color.name };
  const classes = useStyles(props);

  return <Chip size='small' label={title} className={classes.chip} />;
};

export default memo(Department);
