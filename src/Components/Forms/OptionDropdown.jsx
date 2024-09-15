import React from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSelect = styled(Select)({
  border: '1px solid #4527a0',
  color: '#4527a0',
  cursor: 'pointer',
  height: '50px',
  padding: '10px',
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #4527a0',
  },
  '&.MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#4527a0',
    },
    '&:hover fieldset': {
      borderColor: '#4527a0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4527a0',
    },
  },
});


const OptionDropdown = ({ onSelectOption , selectedOption}) => {
  const [currentOption, setCurrentOption] = React.useState(selectedOption);

  //const [selectedOption, setSelectedOption] = React.useState('option1');

  const handleChange = (event) => {
    const value = event.target.value;
    setCurrentOption(value);
    onSelectOption(value);
  };
  return (
    <FormControl>
      <StyledSelect
        value={currentOption}
        onChange={handleChange}
        displayEmpty
        inputProps={{"aria-label":"Withoutlabel"}}
        
      >
        <MenuItem value="option1">Text</MenuItem>
        <MenuItem value="option2">CheckBox</MenuItem>
        <MenuItem value="option3">Multiple Choice</MenuItem>
        <MenuItem value="option4">Dropdown</MenuItem>
        {/* <MenuItem onClick={section} value="option5">Add Section</MenuItem> */}
      </StyledSelect>
    </FormControl>
  );
};

export default OptionDropdown;
