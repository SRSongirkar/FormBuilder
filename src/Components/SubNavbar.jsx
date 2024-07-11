import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import PaintIcon from "@mui/icons-material/Palette";
import SettingsIcon from "@mui/icons-material/Settings";
import PreviewIcon from "@mui/icons-material/Preview";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SubNavbarContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px 20px;
`;

const IconContainer = styled.div`
  margin-right: 20px;
`;

const TextButton = styled.button`
  color: #7d0dc3;
  border: 1px solid #7d0dc3;
  vertical-align: middle;
  white-space: nowrap;
  margin: 0px 12px;
  cursor: pointer;
  background: #fff;
  text-decoration-line: none;
  outline-style: none;
  width: fit-content;
  border-radius: 24px;
  padding: 5px 12px;
  min-width: unset;
  line-height: 20px;
  font-weight: 600;
  font-size: 14px;
  position: relative;
`;

const SubNavbar = () => {
  return (
    <SubNavbarContainer>
      <IconContainer>
        <IconButton>
          <PaintIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
            <PreviewIcon />
        </IconButton>
      </IconContainer>
      <TextButton>Collect Responses</TextButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </SubNavbarContainer>
  );
};

export default SubNavbar;
