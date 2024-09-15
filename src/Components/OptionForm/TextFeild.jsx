import React, { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import { CustomField, CustomTextArea } from "../../Styled/SelectedOptionStyles";

export default function TextField({ answerData, onAnswerChange }) {
  const [isLongAnswer, setIsLongAnswer] = useState(
    answerData.isLongAnswer || false
  );
  const [text, setText] = useState(answerData.text || "");

  useEffect(() => {
    onAnswerChange({ isLongAnswer, text });
  }, [isLongAnswer, text]);

  const handleSwitchChange = () => {
    setIsLongAnswer((prev) => !prev);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const isUserFormPage = location.pathname === "/user-form";

  return (
    <div>
      {isLongAnswer ? (
        <CustomTextArea
          label="Enter Answer"
          variant="outlined"
          fullWidth
          rows={4}
          value={text}
          onChange={handleTextChange}
        />
      ) : (
        <CustomField
          label="Enter Answer"
          variant="outlined"
          fullWidth
          rows={2}
          value={text}
          onChange={handleTextChange}
        />
      )}
      {isUserFormPage && (
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Switch
          checked={isLongAnswer}
          onChange={handleSwitchChange}
          name="longAnswerSwitch"
          color="secondary"
        />
        
          <div style={{ marginRight: "100%" }}>
            {isLongAnswer ? "OneLine" : "MultiLine"}
          </div>
     
      </div>
      )}
    </div>
  );
}
