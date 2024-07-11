// src/Components/Navbar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import DiamondIcon from "@mui/icons-material/Star";
import styled from "styled-components";

const toolbar = styled(Toolbar)`
  background-color: #fff;
  margin-bottom: 20px;
`;


const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} container spacing={2} alignItems="center">
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="textPrimary">
                Forms
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-end"
            spacing={2}
            alignItems="center"
          >
            {/* <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <DiamondIcon />
              </IconButton>
              <Button color="inherit">Go Primium</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">?</Button>
            </Grid>
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MessageIcon />
              </IconButton>
            </Grid> */}
            {/* <Grid item>
              <Button color="inherit"></Button>
            </Grid> */}
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
};

export default Navbar;
