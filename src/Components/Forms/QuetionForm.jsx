import React, { useState, useEffect } from "react";
import {
  StyleContainer,
  StyleBox,
  StyledQuestionField,
} from "../../Styled/QuestionFormStyles";
import AnswerBox from "./AnswerBox";
import ButtonsGroup from "../Common/ButtonsGroup";
import OptionDropdown from "./OptionDropdown";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const QuestionForm = ({
  onDelete,
  onCopy,
  section,
  formIndex,
  formData,
  onChange,
  onAddNewForm,
  onMoveUp,
  onMoveDown,
}) => {
  const [selectedOption, setSelectedOption] = useState(formData.selectedOption);
  const [question, setQuestion] = useState(formData.question);
  const [answerData, setAnswerData] = useState(formData.answerData);
  const location = useLocation();

  const isUserFormPage = location.pathname === "/user-form";

  useEffect(() => {
    onChange({ question, selectedOption, answerData });
  }, [question, selectedOption, answerData]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (newAnswerData) => {
    setAnswerData(newAnswerData);
  };

  return (
    <>
      {isUserFormPage && (
        <StyleContainer>
          <StyleBox>
            {
              <div style={{ textAlign: "end" }}>
                <ButtonsGroup
                  onDelete={onDelete}
                  section={section}
                  onCopy={onCopy}
                  onAddNewForm={onAddNewForm}
                  onMoveUp={onMoveUp}
                  onMoveDown={onMoveDown}
                />
                <OptionDropdown
                  selectedOption={selectedOption}
                  onSelectOption={handleOptionSelect}
                />
              </div>
            }

            <StyledQuestionField
              fullWidth
              placeholder="Enter your question..."
              value={question}
              onChange={handleQuestionChange}
              InputProps={{
                disableUnderline: true,
              }}
            />
            {selectedOption && (
              <AnswerBox
                selectedOption={selectedOption}
                answerData={answerData}
                onAnswerChange={handleAnswerChange}
              />
            )}
          </StyleBox>
        </StyleContainer>
      )}
      {!isUserFormPage && (
        <Box
          mb={2}
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
        >
          <Box display="flex" mb={-2} width="100%">
            <Typography variant="body1">Q: {question}</Typography>
          </Box>
          {selectedOption && (
            <AnswerBox
              selectedOption={selectedOption}
              answerData={answerData}
              onAnswerChange={handleAnswerChange}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default QuestionForm;
