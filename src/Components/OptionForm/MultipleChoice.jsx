import React, { useState, useEffect } from "react";
import {
  Radio,
  TextField,
  FormControlLabel,
  RadioGroup,
  Box,
  IconButton,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddButton from "../Common/AddButton";
import { Typography } from "@mui/material";

export default function MultipleChoice({ formIndex }) {
  const [selectedValue, setSelectedValue] = useState(() => {
    const savedValue = localStorage.getItem(`choiceValue-${formIndex}`);
    return savedValue ? savedValue : "";
  });

  const [options, setOptions] = useState(() => {
    const savedOptions = localStorage.getItem(`choiceoptions-${formIndex}`);
    return savedOptions
      ? JSON.parse(savedOptions)
      : [
          { id: 1, label: "Option 1", value: "option1" },
          { id: 2, label: "Option 2", value: "option2" },
        ];
  });

  useEffect(() => {
    localStorage.setItem(`choiceValue-${formIndex}`, selectedValue);
  }, [selectedValue, formIndex]);

  useEffect(() => {
    localStorage.setItem(`choiceoptions-${formIndex}`, JSON.stringify(options));
  }, [options, formIndex]);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
  const isUserFormPage = location.pathname === "/user-form";

  return (
    <div>
      <Box>
        {isUserFormPage && (
          <RadioGroup value={selectedValue} onChange={handleRadioChange}>
            {options.map((option) => (
              <Box key={option.id} display="flex" alignItems="center">
                <FormControlLabel
                  value={option.value}
                  control={<Radio />}
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
            ))}
          </RadioGroup>
        )}
        {!isUserFormPage && (
          <RadioGroup value={selectedValue} onChange={handleRadioChange}>
            {options.map((option) => (
              <Box key={option.id} display="flex" alignItems="center">
                <FormControlLabel
                  value={option.value}
                  control={<Radio />}
                  label={
                    <Typography variant="body1">{option.label}</Typography>
                  }
                />
              </Box>
            ))}
          </RadioGroup>
        )}
      </Box>
      {isUserFormPage && <AddButton onAddOption={handleAddOption} />}
    </div>
  );
}
