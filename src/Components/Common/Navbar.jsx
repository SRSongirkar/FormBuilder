import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Typography,
  Grid,
  Button,
  Toolbar,
  TextField
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PreviewIcon from "@mui/icons-material/Visibility";
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { StyledButton , StyledTextField} from "../../Styled/NavbarStyles";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
const StyledAppBar = styled(AppBar)({
  
  backgroundColor: '#fff',
  position: 'fixed', // <-- Change from 'static' to 'fixed'
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999, // Ensures it's above other content
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title, setTitle] = useState("Forms");
  const location = useLocation();
  const navigate = useNavigate();

  const handlePreview = () => {
    const previewWindow = window.open('/PreviewPage','_self');
    previewWindow.focus();
  };

  const closepreview=()=>{
    const exitpreview =window.open("/user-form", '_self');
    exitpreview.focus();
  }
  
  const handleMenu = (event) => {
    const exitview =window.open("/", '_self');
    exitview.focus();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isUserFormPage = location.pathname === "/user-form";
  const page = location.pathname === "/";

  return (
    <StyledAppBar>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} container spacing={2} alignItems="center">
            <Grid item>
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <StyledTextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
                size="small"
                inputProps={{ style: { fontSize: 18 } }}
                InputProps={{
                  style: { textAlign: 'center' },
                }}
              />
            </Grid>
          </Grid>
          {!isUserFormPage && (
            <Grid
              item
              xs={6}
              container
              justifyContent="flex-end"
              spacing={2}
              alignItems="center"
            >
              <Grid item>
                {!page && (
                  <ClearRoundedIcon sx={{ color: "purple" }} onClick={closepreview} variant="contained"/>
                )}
              </Grid>
            </Grid>
          )}
          {isUserFormPage && (
            <Grid
              item
              xs={6}
              container
              justifyContent="flex-end"
              spacing={2}
              alignItems="center"
            >
              <Grid item>
                <StyledButton
                  startIcon={<PreviewIcon />}
                  variant="contained"
                  onClick={handlePreview}
                >
                  Preview
                </StyledButton>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
