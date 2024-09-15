import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '30px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    fontSize: '10px',
  },
}));

export const LeftButton = styled(Button)(({ theme }) => ({
  width: '300px',
  padding: '8px 16px',
  lineHeight: '20px',
  fontWeight: 600,
  fontSize: '14px',
  color: '#fff',
  background: '#673ab7',
  border: 'none',
  borderRadius: '16px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#673ab7',
  },
  [theme.breakpoints.down('md')]: {
    width: '300px',
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '4px 8px',
    fontSize: '10px',
  },
}));

export const HeaderRight = styled(Box)(({ theme }) => ({
  width: '300px',
  display: 'flex',
  justifyContent: 'space-around',
  [theme.breakpoints.down('md')]: {
    width: 'auto',
  },
}));

export const FormIconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '10px',
});
