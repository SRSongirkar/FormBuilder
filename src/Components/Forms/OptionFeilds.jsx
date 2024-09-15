import React, { useState, useRef, useEffect } from 'react';
import { AddNewButton, ButtonContainer, OptionBox, SelectOptionBox } from '../../Styled/OptionFeildsStyle';

const OptionFields = ({ onSelectOption, buttonLabel, onAddNewForm }) => {
  const [isExpanded, setIsExpanded] = useState(() => {
    const savedState = localStorage.getItem("isExpanded");
    return savedState ? JSON.parse(savedState) : false;
  });
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleSelectOption = (option) => {
    onSelectOption(option);
    setIsExpanded(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("isExpanded", JSON.stringify(isExpanded));
  }, [isExpanded]);

  return (
    <ButtonContainer ref={dropdownRef}>
      <AddNewButton onClick={() => { onAddNewForm();}}>
        {isExpanded ? '-' : `+ ${buttonLabel}`}
      </AddNewButton>
      {isExpanded && (
        <OptionBox isExpanded={isExpanded} style={{ display: 'flex', flexDirection: 'row' }}>
          <SelectOptionBox onClick={() => handleSelectOption('Text')}>Text</SelectOptionBox>
          <SelectOptionBox onClick={() => handleSelectOption('Multiple')}>Multiple</SelectOptionBox>
          <SelectOptionBox onClick={() => handleSelectOption('Checkbox')}>Checkbox</SelectOptionBox>
          <SelectOptionBox onClick={() => handleSelectOption('Dropdown')}>Dropdown</SelectOptionBox>
          <SelectOptionBox onClick={() => handleSelectOption('Date')}>Date</SelectOptionBox>
        </OptionBox>
      )}
    </ButtonContainer>
  );
};

export default OptionFields;
