import React, { useState } from "react";
import styled from "styled-components";

// Styled Components for the Custom Dropdown
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  background: #7d0dc3;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #7d0dc3;
`;

const DropdownList = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  background: white;
  border: 1px solid #7d0dc3;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: #7d0dc3;
  font-size: 16px;

  &:hover {
    background: #f0f0f0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

// CustomDropdown Component
const CustomDropdown = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleToggle}>
        {selectedOption || "Add"}
        <span>&#9662;</span>
      </DropdownButton>
      <DropdownList open={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleSelect(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default CustomDropdown;
