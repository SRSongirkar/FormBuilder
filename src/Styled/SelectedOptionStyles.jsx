import { TextField, Box , Button , Badge } from '@mui/material';
import { styled } from '@mui/system';

export const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&.Mui-disabled': {
      backgroundColor: '#f5f5f5',
    },
  },
});
export const AnswerBoxStyle= styled('div')({
  display: 'flex',
  justifyContent: 'start',
  marginTop: '30px',
  color:"#673ab7"
});

export const AddOptionButton= styled(Button)({
  display: 'flex',
  justifyContent: 'start',
  marginTop: '30px',
  background: '#673ab7',
  color: '#fff',
  padding:'8px 16px',
  textAlign:'center',
  '&:hover': {
    backgroundColor: '#673ab7',
  },
});


export const ButtonGroupStyle= styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export const CustomField = styled(TextField)({
  '& .MuiInputBase-root': {
    backgroundColor: '#f9f9f9',
    height: '40px',
    textAlign: 'center'
  },
  '&:hover': {
    backgroundColor: '#673ab7',
  },
});

export const CustomTextArea = styled(TextField)({
  '& .MuiInputBase-root': {
    backgroundColor: '#f9f9f9',
    height: '100px',
    textAlign: 'center'
  },
  '&:hover': {
    backgroundColor: '#673ab7',
  },
});

export const CustomBadge = styled(Badge)({
    // top: '24px',
    // // right: '56px',
    // width: '100px',
    // height: '30px',
    // background: '#673ab7',
    // color: '#fff'
});

export const AddSectionButton = styled(Button)(({ theme }) => ({
  width: '200px',
  padding: '8px 16px',
  lineHeight: '20px',
  fontWeight: 600,
  fontSize: '14px',
  color: '#fff',
  background: '#673ab7',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  margin: '16px 0',
  '&:hover': {
    backgroundColor: '#673ab7',
  },
  [theme.breakpoints.down('md')]: {
    width: '180px',
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '4px 8px',
    fontSize: '10px',
  },
}));
