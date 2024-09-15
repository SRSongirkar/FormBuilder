import { TextField, Box } from '@mui/material';
import { styled } from '@mui/system';

export const StyleContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '16px',
});

export const StyleBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '700px',
  padding: '16px',
  marginBottom: '16px',
  marginTop: '40px',
  borderLeft: '6px solid #673ab7',
  borderRadius: '10px',
  boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  backgroundColor: '#fff',
}));

export const StyledQuestionField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
     padding: 0,
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none', 
      },
    },
    '& .MuiOutlinedInput-input': {
      borderBottom: '2px solid #ccc',
      height: '1.2em', 
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      borderBottom: '2px solid #673ab7',
      padding: '10px',
    },
  });