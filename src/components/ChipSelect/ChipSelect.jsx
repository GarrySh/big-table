import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input, InputLabel, MenuItem, FormControl, Select, Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

export default ({ values, selectedValues, onChange, title, name }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-mutiple-chip-label'>{title}</InputLabel>
        <Select
          labelId='demo-mutiple-chip-label'
          id='demo-mutiple-chip'
          multiple
          name={name}
          value={selectedValues}
          onChange={onChange}
          input={<Input id='select-multiple-chip' />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(id => (
                <Chip key={id} label={values[id].title} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {values.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
