import React from "react";
import MultipleChoice from "../OptionForm/MultipleChoice";
import CheckboxOptions from "../OptionForm/CheckboxOptions";
import DropdownOptions from "../OptionForm/DropdownOptions";
import DateOptions from "../OptionForm/DateOptions";
import TextField from "../OptionForm/TextFeild";

const AnswerBox = ({ selectedOption, answerData, onAnswerChange }) => {
  const renderAnswerComponent = () => {
    switch (selectedOption) {
      case 'option1':
        return <TextField answerData={answerData} onAnswerChange={onAnswerChange} />;
      case 'option2':
        return <CheckboxOptions answerData={answerData} onAnswerChange={onAnswerChange} />;
      case 'option3':
        return <MultipleChoice answerData={answerData} onAnswerChange={onAnswerChange} />;
      case 'option4':
        return <DropdownOptions answerData={answerData} onAnswerChange={onAnswerChange} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      {renderAnswerComponent()}
    </div>
  );
};

export default AnswerBox;

