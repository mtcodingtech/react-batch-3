import * as React from 'react';
import Button from '@mui/material/Button';

export default function CustomBtn() {
  return <>
    <Button>Hello world</Button>
    <Button variant='outlined'>Hello world</Button>
    <Button variant='contained'>Hello world</Button>
  </>;
}