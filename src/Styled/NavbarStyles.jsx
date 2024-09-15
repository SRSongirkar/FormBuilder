import { styled } from "@mui/system";
import { Button, Toolbar , TextField } from "@mui/material";

export const StyledToolbar = styled(Toolbar)`
  background-color: #fff;
  height: 60px;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  background-color: #673ab7;
  &:hover {
    background-color: #5e35b1;
  }
`;

export const StyledIcon = styled("div")`
  width: 50px;
  height: 50px;
  border: 2px solid #673ab7;
  border-radius: 50%;
`;

export const StyledTextField = styled(TextField)({
    textAlign: 'center',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', 
      },
    },
    '& .MuiInputBase-input': {
      fontSize: '18px',
    },
  });
