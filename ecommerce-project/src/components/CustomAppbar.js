"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Image from 'next/image';
import { Badge, IconButton } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

export default function CustomAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
     
        <AppBar sx={{background: "#fff"}}>
          <Toolbar sx={{justifyContent: "space-between"}}>
            <Image src={"/shop.png"} alt="logo" width={200} height={200} style={{width: 50, height: 50, objectFit: "cover"}} />
            <IconButton
              size="large"
            
             
            >
              <Badge badgeContent={3} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      
      </HideOnScroll>
      <Toolbar />
      
    </React.Fragment>
  );
}
