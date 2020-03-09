import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { store, actions } from 'store';
import { TextField } from '@material-ui/core';
import Modal from 'components/Modal';
import Button from 'components/Button';
import ChipSelect from 'components/ChipSelect';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  form: {
    '& > *': {
      marginBottom: theme.spacing(2),
      width: '100%',
    },
  },
}));

const AddUser = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(store);
  const { departments } = state;
  const initialState = { firstName: '', lastName: '', departmentIds: [] };

  const [isOpen, setOpen] = useState(false);
  const [inputs, setInputs] = useState(initialState);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(formInputs => ({ ...formInputs, [event.target.name]: event.target.value }));
  };

  const handleSave = event => {
    event.preventDefault();
    dispatch({ type: actions.addUser, payload: inputs });
    setInputs(initialState);
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleOpen}>Add new user</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <form className={classes.form} noValidate autoComplete='off'>
          <TextField
            id='firstName'
            name='firstName'
            label='First Name'
            variant='outlined'
            autoFocus
            value={inputs.firstName}
            onChange={handleInputChange}
          />
          <TextField
            id='lastName'
            name='lastName'
            label='Last Name'
            variant='outlined'
            value={inputs.lastName}
            onChange={handleInputChange}
          />
          <ChipSelect
            name='departmentIds'
            values={departments}
            selectedValues={inputs.departmentIds}
            onChange={handleInputChange}
            title='Departments'
          />
          <Button onClick={handleSave}>Save</Button>
        </form>
      </Modal>
    </div>
  );
};

export default AddUser;
