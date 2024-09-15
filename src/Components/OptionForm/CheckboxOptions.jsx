import React, { useState, useEffect } from "react";
import {
  Checkbox,
  TextField,
  FormControlLabel,
  Box,
  IconButton,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddButton from "../Common/AddButton";
import {Typography } from "@mui/material";

export default function CheckboxOptions({ formIndex }) {
  const [selectedValues, setSelectedValues] = useState(() => {
    const savedValues = localStorage.getItem(`selectedValues-${formIndex}`);
    return savedValues ? JSON.parse(savedValues) : [];
  });

  const [options, setOptions] = useState(() => {
    const savedOptions = localStorage.getItem(`options-${formIndex}`);
    return savedOptions
      ? JSON.parse(savedOptions)
      : [
          { id: 1, label: "option 1", value: "option1" },
          { id: 2, label: "option 2", value: "option2" },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      `selectedValues-${formIndex}`,
      JSON.stringify(selectedValues)
    );
  }, [selectedValues, formIndex]);

  useEffect(() => {
    localStorage.setItem(`options-${formIndex}`, JSON.stringify(options));
  }, [options, formIndex]);

  const handleCheckboxChange = (event, value) => {
    if (event.target.checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    }
  };
  const isUserFormPage = location.pathname === "/user-form";

  const handleAddOption = () => {
    const newOptionId = options.length + 1;
    const newOption = {
      id: newOptionId,
      label: `Option ${newOptionId}`,
      value: `option${newOptionId}`,
    };
    setOptions([...options, newOption]);
  };

  const handleLabelChange = (id, event) => {
    const newOptions = options.map((option) => {
      if (option.id === id) {
        return { ...option, label: event.target.value };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const handleRemoveOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  return (
    <div>
     
      <Box>
      {
        isUserFormPage &&
     
        options.map((option) => (
          <Box key={option.id} display="flex" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedValues.includes(option.value)}
                  onChange={(e) => handleCheckboxChange(e, option.value)}
                />
              }
              label={
                <TextField
                  style={{ paddingTop: "10px" }}
                  placeholder={option.label}
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={option.label}
                  onChange={(e) => handleLabelChange(option.id, e)}
                />
              }
            />
           
            <IconButton
              onClick={() => handleRemoveOption(option.id)}
              aria-label="delete"
              size="small"
            >
           
              <DeleteOutlineOutlinedIcon />
            </IconButton>
            
          </Box>
        ))
      }
       {
        !isUserFormPage &&
     
        options.map((option) => (
          <Box key={option.id} display="flex" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedValues.includes(option.value)}
                  onChange={(e) => handleCheckboxChange(e, option.value)}
                />
              }
              label={
                <Typography
                  variant="body1"
                >{option.label}</Typography>
              }
            />
            
          </Box>
        ))
      }
      </Box>
      {isUserFormPage && <AddButton onAddOption={handleAddOption} />}
    </div>
  );
}
