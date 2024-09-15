// src/Styled/StyledButton.js
import { Button } from '@mui/material';
import { styled } from '@mui/system';


export const ButtonContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    marginTop: '20px',
}));

export const AddNewButton = styled('div')(({ theme }) => ({
    color: '#fff',
    background: '#673ab7',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
    padding: '8px 16px',
    textTransform: 'none',
    fontWeight: 'bold',
}));


export const OptionBox = styled('div')(({ theme , isExpanded  }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#673ab7',
    maxHeight: isExpanded ? '100px' : '0',
    overflow: 'hidden',
    transition: 'max-width 0.6s ease',
    padding: '8px 16px',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
}));

export const SelectOptionBox = styled('div')(({ theme }) => ({
    background: '#fff',
    padding: '7px 18px',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'all 0.6s ease',
    transition: 'background-color 0.6s ease',
}));