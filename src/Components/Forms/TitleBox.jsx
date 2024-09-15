import React, { useState, useEffect } from "react";
import {
  StyleBox,
  StyledTitleField,
  StyledTextField,
  StyledContainer,
  StyledQuestionField,
} from "../../Styled/TitleBoxStyled";
import OptionFields from "./OptionFeilds";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

const TitleBox = ({ onAddNewForm }) => {
  const [description, setDescription] = useState(
    localStorage.getItem("description") || ""
  );
  const [Title, setTitle] = useState(
    localStorage.getItem("Title") || "Untitled Form"
  );
  const [openingFor, setOpeningFor] = useState(
    localStorage.getItem("openingFor") || ""
  );
  const [closingFor, setClosingFor] = useState(
    localStorage.getItem("closingFor") || ""
  );
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();

  const isUserFormPage = location.pathname === "/user-form";
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    localStorage.setItem("description", description);
  }, [description]);

  useEffect(() => {
    localStorage.setItem("Title", Title);
  }, [Title]);

  useEffect(() => {
    localStorage.setItem("openingFor", openingFor);
  }, [openingFor]);

  useEffect(() => {
    localStorage.setItem("closingFor", closingFor);
  }, [closingFor]);

  return (
    <>
      <StyledContainer>
        <StyleBox style={{ background: "#fff" }}>
          <StyledTitleField
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            disabled={!isEditing}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {isEditing ? (
                    <IconButton onClick={handleSaveClick}>
                      <CheckIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={handleEditClick}>
                      <EditIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
          {isUserFormPage && (
            <>
              <StyledTextField
                variant="outlined"
                placeholder="Enter description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={2}
              />
              <StyledQuestionField
                variant="standard"
                placeholder="Enter opening for"
                value={openingFor}
                onChange={(e) => setOpeningFor(e.target.value)}
              />
              <StyledQuestionField
                variant="standard"
                placeholder="Enter closing for"
                value={closingFor}
                onChange={(e) => setClosingFor(e.target.value)}
              />
              <OptionFields
                onAddNewForm={onAddNewForm}
                buttonLabel="Add New Question"
              />
            </>
          )}
        </StyleBox>
      </StyledContainer>
    
    </>
  );
};

export default TitleBox;
