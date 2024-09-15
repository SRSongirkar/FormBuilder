import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  TextField,
  FormControl,
  Box,
  IconButton,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddButton from "../Common/AddButton";
import { Typography } from "@mui/material";

const DropdownOptions = ({ formIndex }) => {
  const [selectedValue, setSelectedValue] = useState(() => {
    const savedValue = localStorage.getItem(`dropdownValue-${formIndex}`);
    return savedValue ? savedValue : "";
  });

  const [options, setOptions] = useState(() => {
    const savedOptions = localStorage.getItem(`dropdownOptions-${formIndex}`);
    return savedOptions
      ? JSON.parse(savedOptions)
      : [
          { id: 1, label: "Option 1", value: "option1" },
          { id: 2, label: "Option 2", value: "option2" },
        ];
  });

  const [editingOptionId, setEditingOptionId] = useState(null);
  const [newOptionLabel, setNewOptionLabel] = useState("");

  useEffect(() => {
    localStorage.setItem(`dropdownValue-${formIndex}`, selectedValue);
  }, [selectedValue, formIndex]);

  useEffect(() => {
    localStorage.setItem(
      `dropdownOptions-${formIndex}`,
      JSON.stringify(options)
    );
  }, [options, formIndex]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAddOption = () => {
    const newOptionId = options.length + 1;
    const newOption = {
      id: newOptionId,
      label: newOptionLabel || `Option ${newOptionId}`, // Use provided label or default
      value: `option${newOptionId}`,
    };
    setOptions([...options, newOption]);
    setNewOptionLabel(""); // Reset new option label input
  };

  const handleLabelChange = (id, event) => {
    const newOptions = options.map((option) =>
      option.id === id ? { ...option, label: event.target.value } : option
    );
    setOptions(newOptions);
  };

  const handleStartEditing = (id) => {
    setEditingOptionId(id);
  };

  const handleStopEditing = () => {
    setEditingOptionId(null);
  };

  const handleRemoveOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };
  const isUserFormPage = location.pathname === "/user-form";

  return (
    <div>
      <Box>
        {isUserFormPage && (
          <FormControl fullWidth>
            <Select value={selectedValue} onChange={handleSelectChange}>
              {options.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  {editingOptionId === option.id ? (
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={option.label}
                      onChange={(e) => handleLabelChange(option.id, e)}
                      onBlur={handleStopEditing}
                      autoFocus
                    />
                  ) : (
                    <Box
                      display="flex"
                      alignItems="center"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleStartEditing(option.id)}
                    >
                      <div>{option.label}</div>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveOption(option.id);
                        }}
                        aria-label="delete"
                        size="small"
                      >
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </Box>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {!isUserFormPage && (
          <FormControl fullWidth>
            <Select value={selectedValue} onChange={handleSelectChange}>
              {options.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  {editingOptionId === option.id ? (
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={option.label}
                      onChange={(e) => handleLabelChange(option.id, e)}
                      onBlur={handleStopEditing}
                      autoFocus
                    />
                  ) : (
                    <Box
                      display="flex"
                      alignItems="center"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleStartEditing(option.id)}
                    >
                      <div>{option.label}</div>
                    </Box>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Box>
      {isUserFormPage && (
        <Box display="flex" alignItems="center" marginTop="10px">
          <TextField
            variant="outlined"
            size="small"
            value={newOptionLabel}
            onChange={(e) => setNewOptionLabel(e.target.value)}
            placeholder="New Option Label"
          />
          <IconButton
            style={{ paddingBottom: "35px" }}
            onClick={handleAddOption}
            aria-label="add"
            size="small"
            disabled={!newOptionLabel.trim()} // Disable if label is empty or whitespace
          >
            <AddButton />
          </IconButton>
        </Box>
      )}
    </div>
  );
};

export default DropdownOptions;
