import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";

const SubFormContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #7d0dc3;
  padding: 30px;
  border-top: 3px solid #7d0dc3;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 10px;
  }
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

  .toggle-button {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
    margin: 0px 15px;
  }

  .toggle-button input {
    display: none;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 24px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #7d0dc3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
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

const AnswerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  input {
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

const Subform = ({
  question,
  index,
  onQuestionChange,
  onDelete,
  previewMode,
}) => {
  const [isLongAnswer, setIsLongAnswer] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onQuestionChange(index, { ...question, [name]: value });
  };

  const handleToggleLongAnswer = () => {
    setIsLongAnswer((prev) => !prev);
  };

  const handleToggleRequired = () => {
    setIsRequired((prev) => !prev);
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
        <div style={{ marginRight: "5px" }}>A</div>
        <input
          type="text"
          name="answer"
          placeholder="Enter answer options"
          value={question.answer}
          onChange={handleInputChange}
          disabled={!previewMode} // This makes the input read-only if not in preview mode
        />
      </AnswerBox>
      {!previewMode ? (
        <OptionButtons>
          <label className="toggle-button">
            <input
              type="checkbox"
              checked={isLongAnswer}
              onChange={handleToggleLongAnswer}
            />
            <span className="slider"></span>
          </label>
          Long Answer
          <label className="toggle-button">
            <input
              type="checkbox"
              checked={isRequired}
              onChange={handleToggleRequired}
            />
            <span className="slider"></span>
          </label>
          Required
        </OptionButtons>
      ) : (
        " "
      )}
    </SubFormContainer>
  );
};

export default Subform;
