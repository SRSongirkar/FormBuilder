import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";

const CheckBoxFormContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #7d0dc3;
  padding: 30px;
  border-top: 3px solid #7d0dc3;
  border-radius: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;
`;

const OptionButtons = styled.div`
  margin-top: 10px;
  display: flex;
  color: #242424;

  button {
    background: none;
    border: none;
    color: #7d0dc3;
    cursor: pointer;
    margin-right: 20px;
    font-weight: 600;
    font-size: 14px;

    &:hover {
      color: #5b0a91;
    }
  }
`;

const QuestionWrapper = styled.div`
  margin-bottom: 15px;
  

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"] {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-bottom 0.3s;

    &:focus {
      border-bottom: 2px solid #7d0dc3;
    }
  }
`;
const AnswerBox = styled.div`
  
 
  margin-bottom: 15px;

  textarea {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-bottom 0.3s;
    background: #fff;

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

  input[type="checkbox"] {
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

const CheckBoxForm = ({
  question,
  index,
  onQuestionChange,
  onDelete,
  previewMode,
}) => {
  const [options, setOptions] = useState(question.options || [""]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onQuestionChange(index, { ...question, [name]: value });
  };

  const handleOptionChange = (i, e) => {
    const newOptions = [...options];
    newOptions[i] = e.target.value;
    setOptions(newOptions);
    onQuestionChange(index, { ...question, options: newOptions });
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (i) => {
    const newOptions = options.filter((_, index) => index !== i);
    setOptions(newOptions);
    onQuestionChange(index, { ...question, options: newOptions });
  };

  return (
    <CheckBoxFormContainer>
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
      <QuestionWrapper>
      <QuestionBox>
        <div style={{ marginRight: "5px" }}>{`${index + 1} `}</div>
        <input
          type="text"
          name="question"
          placeholder="Enter your question"
          value={question.question}
          onChange={handleInputChange}
        />
      </QuestionBox>
        <AnswerBox>
          <label>Options:</label>
          {options.map((option, i) => (
            <RadioWrapper key={i}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  onChange={(e) => handleOptionChange(i, e)}
                  placeholder={`Option ${i + 1}`}
                />
                <StyledInput
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(i, e)}
                  placeholder={`Option ${i + 1}`}
                />
              </label>

              <button type="button" onClick={() => removeOption(i)}>
                Remove
              </button>
            </RadioWrapper>
          ))}
        </AnswerBox>
        <button type="button" onClick={addOption}>
          + Add Option
        </button>
      </QuestionWrapper>
    </CheckBoxFormContainer>
  );
};

export default CheckBoxForm;
