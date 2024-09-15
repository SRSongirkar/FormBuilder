import React from "react";
import { AddOptionButton } from "../../Styled/SelectedOptionStyles";

export default function AddButton({ onAddOption }) {
  return (
    <div>
      <AddOptionButton variant='contained' onClick={onAddOption}>
        Add Option
      </AddOptionButton>
    </div>
  );
}
