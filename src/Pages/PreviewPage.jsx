import React from "react";
import styled from "styled-components";
import Subform from "../Components/Subform";
import Choiceform from "../Components/Choiceform";
import { useLocation } from 'react-router-dom';
import CheckBoxForm from "../Components/CheckBoxForm";
import DropDownForm from "../Components/DropDownForm";
import LongAnswer from "../Components/LongAnswer";
import MobileNumber from "../Components/MobileNumber";
const PreviewContainer = styled.div`
  width: 100%;
  border-radius: 30px;
`;

const Subheading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #666666;
  margin-bottom: 20px;
`;

const BackButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: purple;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #c59aff;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    padding: 10px 0;
  }
`;

const QuestionList = styled.div`
  list-style-type: none;
  padding: 0;
`;

const SubmitButton = styled.button`
  background-color: purple;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #c59aff;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    padding: 10px 0;
  }
`;

const PreviewPage = ({ questions, onBackClick }) => {
  const location = useLocation();
  const { inputValue } = location.state || {};
  return (
    <PreviewContainer>
      <Subheading>
        Preview Questions
        <BackButtonBox onClick={onBackClick}>Back</BackButtonBox>
      </Subheading>
      <QuestionList>
        {/* {questions.map((question, index) =>
          question.type === "Choice" ? (
            <Choiceform
              key={index}
              question={question}
              index={index}
              value={inputValue}
              previewMode={true}
            />
          ) : (
            <Subform key={index} question={question} index={index} previewMode={true}   />
          )
        )} */}
            {questions.map((question, index) => {
          switch (question.type) {
            case "Choice":
              return (
                <Choiceform key={index} question={question} index={index} />
              );
            case "ShortText":
              return <Subform key={index} question={question} index={index} />;
            case "DropDown":
              return (
                <DropDownForm key={index} question={question} index={index} />
              );
            case "CheckBox":
              return (
                <CheckBoxForm key={index} question={question} index={index} />
              );
            case "Long Paragraph":
              return (
                <LongAnswer key={index} question={question} index={index} />
              );
            case "NumberFiled":
              return (
                <MobileNumber key={index} question={question} index={index} />
              );
            default:
              return null;
          }
        })}
      </QuestionList>
      <SubmitButton>Submit</SubmitButton>
    </PreviewContainer>
  );
};

export default PreviewPage;
