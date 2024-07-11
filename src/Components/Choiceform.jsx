import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import { useNavigate } from 'react-router-dom';
const SubFormContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #7d0dc3;
  padding: 30px;
  border-top: 3px solid #7d0dc3;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #7d0dc3;
  border-radius: 5px;
  outline: none;
  transition: border-bottom 0.3s;

  &:focus {
    border-bottom: 2px solid #7d0dc3;
  }
`;

const QuestionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;

  input {
    flex: 1;
    padding: 8px;
    font-size: 14px;
    border-radius: 5px;
    outline: none;
    transition: border-bottom 0.3s;
    border: none;
    background: #7d0dc31f;
    
    &:focus {
      border-bottom: 2px solid #7d0dc3;
    }

    @media (max-width: 768px) {
      font-size: 13px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const RadioWrapper = styled.div`
  margin: 10px 0;

  input[type="radio"] {
    margin-right: 10px;
    accent-color: #7d0dc3;
  }

  .option-input {
    width: 400px;
    background: #7d0dc31f;
    padding: 8px;
    font-size: 14px;
    border: none;
    outline: none;
    margin-right: 10px;
  }
`;

const OptionButtons = styled.div`
  margin-top: 10px;

  button {
    background: none;
    border: none;
    color: #7d0dc3;
    cursor: pointer;
    margin-right: 15px;
    font-weight: 600;
    font-size: 14px;

    &:hover {
      color: #5b0a91;
    }
  }
`;

const Choiceform = ({ question, index, onQuestionChange, onDelete, previewMode }) => {

  const [inputValue, setInputValue] = useState('');
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push({
      pathname: '/PreviewPage',
      state: { inputValue },
    });
  };
  const [options, setOptions] = useState(["", "", ""]);
  const [otherOption, setOtherOption] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onQuestionChange(index, { ...question, [name]: value });
  };

  const handleOptionChange = (e, optionIndex) => {
    if (optionIndex === options.length) {
      setOtherOption(e.target.value);
    } else {
      const newOptions = options.map((option, i) =>
        i === optionIndex ? e.target.value : option
      );
      setOptions(newOptions);
    }
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const addOtherOption = () => {
    setOtherOption(true);
  };

  return (
    <SubFormContainer>
      <Header>
        <div>
          <IconButton>
            <ContentCopyOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(index)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <NorthOutlinedIcon />
          </IconButton>
          <IconButton>
            <SouthOutlinedIcon />
          </IconButton>
        </div>
      </Header>
      <div>
        <QuestionBox>
          <StyledLabel style={{"margin-right": "5px"}}>{`${index + 1} `}</StyledLabel>
          <StyledInput
            type="text"
            name="question"
            placeholder="Enter your question"
            value={question.question}
            onChange={handleInputChange}
          />
        </QuestionBox>
        {options.map((option, optionIndex) => (
          <RadioWrapper key={optionIndex}>
            <label>
              <input
                type="radio"
                name={`option${index}`}
                value={option}
                readOnly
                disabled={!previewMode}
              />
              <StyledInput
                className="option-input"
                placeholder="Enter your option"
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(e, optionIndex)}
                style={{"background" : "#fff"}}
              />
            </label>
          </RadioWrapper>
        ))}
        {otherOption && (
          <RadioWrapper>
            <label>
              <input
                type="radio"
                name={`option${index}`}
                value="Other"
                readOnly
                disabled={!previewMode}
              />
              <StyledInput
                className="option-input"
                placeholder="Other"
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                style={{"background" : "#fff"}}
              />
            </label>
          </RadioWrapper>
        )}
      </div>
      <OptionButtons>
        <button onClick={addOption}>+ Add Option</button>
        {!otherOption && <button onClick={addOtherOption}>Add Other Option</button>}
      </OptionButtons>
    </SubFormContainer>
  );
};

export default Choiceform;
