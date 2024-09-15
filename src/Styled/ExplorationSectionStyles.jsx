import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const SectionContainer = styled(Box)({
  width: '100%',
  maxWidth: '1200px',
  paddingTop: '30px',
  margin: '0 auto',
});

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  [theme.breakpoints.down('lg')]: {
    flexWrap: 'wrap',
    gap: '10px',
  },
}));

export const HeadingText = styled(Typography)({
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '1.5rem',
  lineHeight: '2rem',
  paddingBottom: '15px',
  color: '#000000de',
});

export const Card = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 'calc(20% - 20px)', 
  maxWidth: '200px',
  flex: '1 0 auto', 
  border: '4px solid #fff',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('lg')]: {
    width: 'calc(25% - 10px)',
    maxWidth: '160px',
  },
  [theme.breakpoints.down('md')]: {
    width: 'calc(33.33% - 10px)',
    maxWidth: '150px',
  },
  [theme.breakpoints.down('sm')]: {
    width: 'calc(50% - 10px)',
    maxWidth: '120px',
  },
}));

export const CardImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

export const ImageTextOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  color: '#fff',
  padding: '8px',
  textAlign: 'center',
  color: 'rgb(255, 255, 255)',
  textShadow: 'rgba(0, 0, 0, 0.14) 0px 0.25rem 0.5rem, rgba(0, 0, 0, 0.12) 0px 0px 0.125rem',
  fontSize: '1rem',
  fontWeight: 700,
});
