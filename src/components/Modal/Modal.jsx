import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default ({ children, isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={isOpen}
        onClose={onClose}
      >
        <div className={classes.paper}>{children}</div>
      </Modal>
    </div>
  );
};

