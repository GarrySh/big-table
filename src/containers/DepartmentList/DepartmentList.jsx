import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Department from './components/Department';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const DepartmentList = ({ departmentIds = [] }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {departmentIds.map(id => (
        <Department id={id} key={id} />
      ))}
    </div>
  );
};

export default memo(DepartmentList);
