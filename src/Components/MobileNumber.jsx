import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";

const MobileNumberContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #7d0dc3;
  padding: 30px;
  border-top: 3px solid #7d0dc3;
  border-radius: 30px;
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
const Header = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;
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

const MobileNumber = ({ question, index, onQuestionChange, onDelete,previewMode }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onQuestionChange(index, { ...question, [name]: value });
  };

  return (
    <MobileNumberContainer>
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
          placeholder="Enter your Number"
          value={question.question}
          onChange={handleInputChange}
        />
      </QuestionBox>
      <AnswerBox>
        <div style={{ marginRight: "5px" }}>A</div>
        <input
          type="text"
          name="answer"
          placeholder="Enter Your answer"
          value={question.answer}
          onChange={handleInputChange}
          disabled={!previewMode} // This makes the input read-only if not in preview mode
        />
      </AnswerBox>
    </MobileNumberContainer>
  );
};

export default MobileNumber;
