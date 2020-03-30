import React from 'react';
import { Button } from '@material-ui/core';

export default ({ onClick, children, className = '' }) => (
  <Button variant='contained' color='primary' onClick={onClick} className={className}>
    {children}
  </Button>
);
