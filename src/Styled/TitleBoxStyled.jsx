import { Box, TextField, Typography , Button } from '@mui/material';
import { styled } from '@mui/system';

export const StyleBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '700px',
  padding: '10px',
  marginBottom: '16px',
  boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  // marginTop: '40px',
  borderWidth: '1px',
  borderTop: '6px solid #673ab7',
  borderLeft: '3px solid #673ab7',
  borderRadius: '10px',
  
  // Responsive styles
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '16px',
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginTop: '10px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderBottom: '2px solid gray',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid gray',
      borderBottom: '2px solid #673ab7',
    },
    '&:hover fieldset': {
      border: '1px solid gray',
      borderBottom: '2px solid gray',
    },
  },
}));

export const StyledTitleField = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginBottom: '8px',
  textAlign: 'start',
  fontFamily: 'docs-Roboto',
  fontWeight: '400',
  fontSize: '24pt',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '& input': {
      fontSize: '20px',
    },
  },
}));

export const StyledContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyleSectionButton = styled('Button')`
  background-color: #673ab7;
  padding: 15px;
  color: #fff;
  margin-top: 10px;
  outline: none;
  cursor: pointer;
`;

export const StyledQuestionField = styled(TextField)({
  marginTop:'10px',
  paddingTop:"10px",
  display: 'flex',
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
    borderBottom: '2px solid #673ab7',
    width: '40%'
    
    
  },
});