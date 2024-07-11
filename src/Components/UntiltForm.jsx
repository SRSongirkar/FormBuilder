import React, { useState } from "react";
import styled from "styled-components";
import Subform from "./Subform";
import Choiceform from "./Choiceform";
import PreviewPage from "../Pages/PreviewPage";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import CheckBoxForm from "./CheckBoxForm";
import DropDownForm from "./DropDownForm";
import LongAnswer from "./LongAnswer";
import MobileNumber from "./MobileNumber";

const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  margin: 20px auto;
  max-width: 1000px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    padding: 15px;
    max-width: 800px;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 600px;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    max-width: 100%;
    border-radius: 10px;
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  line-height: normal;
  color: rgb(97, 97, 97);
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Subheading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #666666;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const GridContainerWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const Box = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #7d0dc3;
  color: #7d0dc3;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const BackButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled(KeyboardArrowLeftOutlinedIcon)`
  cursor: pointer;
`;

const InsertButton = styled.p`
  display: flex;
  justify-content: start;
  margin-top: 15px;
  cursor: pointer;
  color: #7d0dc3;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const EditableHeading = styled.input`
  font-size: 28px;
  line-height: normal;
  color: rgb(97, 97, 97);
  font-weight: 600;
  width: 100%;
  border: none;
  outline: none;
  background: none;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

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

const GridContainer = ({ boxNames, onBoxClick }) => (
  <GridContainerWrapper>
    {boxNames.map((name, index) => (
      <Box key={index} onClick={() => onBoxClick(name)}>
        {name}
      </Box>
    ))}
  </GridContainerWrapper>
);

const UntiltForm = () => {
  const [showSubForm, setShowSubForm] = useState(false);
  const [isEditingHeading, setIsEditingHeading] = useState(false);
  const [heading, setHeading] = useState("Untitled Form");
  const [showGrid, setShowGrid] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleBoxClick = (questionType) => {
    const newQuestion = { type: questionType, question: "", answer: "" };
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    setShowSubForm(true);
  };

  const handleBackClick = () => {
    setShowSubForm(false);
  };

  const handleHeadingClick = () => {
    setIsEditingHeading(true);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handleHeadingBlur = () => {
    setIsEditingHeading(false);
  };

  const handleInsertNewQuestion = (option) => {
    if (option) {
      handleBoxClick(option);
      setShowGrid(false);
      setSelectedOption(""); // Clear the selection
    }
  };

  const handleQuestionChange = (index, updatedQuestion) => {
    const updatedQuestions = questions.map((question, i) =>
      i === index ? updatedQuestion : question
    );
    setQuestions(updatedQuestions);
  };

  const handleDeleteQuestion = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((_, i) => i !== index)
    );
  };

  const handlePreviewClick = () => {
    setShowPreview(true);
  };

  const handleBackFromPreview = () => {
    setShowPreview(false);
  };

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    handleInsertNewQuestion(option);
    setIsOpen(false);
  };

  const boxNames = [
    "Choice",
    "ShortText",
    "DropDown",
    "Long Paragraph",
    "NumberFiled",
    "CheckBox",
  ];

  return (
    <Container>
      <InsertButton onClick={handlePreviewClick}>Preview Form</InsertButton>
      {showPreview ? (
        <PreviewPage
          questions={questions}
          onBackClick={handleBackFromPreview}
        />
      ) : (
        <>
          {isEditingHeading ? (
            <EditableHeading
              value={heading}
              onChange={handleHeadingChange}
              onBlur={handleHeadingBlur}
              autoFocus
            />
          ) : (
            <Heading onClick={handleHeadingClick}>{heading}</Heading>
          )}
          {!showSubForm && (
            <Subheading>
              <DropdownContainer>
                <DropdownButton onClick={handleToggle}>
                  {selectedOption || "Add Question"}
                  <span>&#9662;</span>
                </DropdownButton>
                <DropdownList open={isOpen}>
                  {boxNames.map((option, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownList>
              </DropdownContainer>
            </Subheading>
          )}
          {!showSubForm ? (
            // <GridContainer boxNames={boxNames} onBoxClick={handleBoxClick} />
            ""
          ) : (
            <>
              <Subheading>
                Quick Start
                <BackButtonBox>
                  <BackButton onClick={handleBackClick} />
                  <p>Back</p>
                </BackButtonBox>
              </Subheading>
              {questions.map((question, index) => {
                switch (question.type) {
                  case "Choice":
                    return (
                      <Choiceform
                        key={index}
                        question={question}
                        index={index}
                        onQuestionChange={handleQuestionChange}
                        onDelete={handleDeleteQuestion}
                      />
                    );
                  case "ShortText":
                    return (
                      <Subform
                        key={index}
                        question={question}
                        index={index}
                        onQuestionChange={handleQuestionChange}
                        onDelete={handleDeleteQuestion}
                      />
                    );
                  case "DropDown":
                    return (
                      <DropDownForm
                        key={index}
                        question={question}
                        index={index}
                        onQuestionChange={handleQuestionChange}
                        onDelete={handleDeleteQuestion}
                      />
                    );
                  case "CheckBox":
                    return (
                      <CheckBoxForm
                        key={index}
                        question={question}
                        index={index}
                        onQuestionChange={handleQuestionChange}
                        onDelete={handleDeleteQuestion}
                      />
                    );
                  case "Long Paragraph":
                    return (
                      <LongAnswer
                        key={index}
                        question={question}
                        index={index}
                        onQuestionChange={handleQuestionChange}
                        onDelete={handleDeleteQuestion}
                      />
                    );
                  case "NumberFiled":
                    return (
                      <MobileNumber
                        key={index}
                        question={question}
                        index={index}
                        onQuestionChange={handleQuestionChange}
                        onDelete={handleDeleteQuestion}
                      />
                    );
                  default:
                    return null;
                }
              })}
               <>
           <DropdownContainer style={{paddingTop:"5px"}}>
                <DropdownButton onClick={handleToggle}>
                  {selectedOption || "Add New Question"}
                  <span>&#9662;</span>
                </DropdownButton>
                <DropdownList open={isOpen}>
                  {boxNames.map((option, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownList>
              </DropdownContainer>
              </>
            </>
            
          )}
         
        </>
        
      )}
    </Container>
  );
};

export default UntiltForm;
