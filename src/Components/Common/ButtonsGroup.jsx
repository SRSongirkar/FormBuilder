import React from 'react';
import { IconButton, ButtonGroup, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { AddOptionButton } from '../../Styled/SelectedOptionStyles';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export default function ButtonsGroup({ onDelete, section, onCopy, onAddNewForm ,onMoveUp,onMoveDown}) {
  return (
    <ButtonGroup variant="outlined">
      <Tooltip title="Delete">
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Copy">
        <IconButton onClick={onCopy}>
          <FileCopyIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Move Up">
        <IconButton>
          <ArrowUpwardIcon onClick={onMoveUp}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Move Down">
        <IconButton>
          <ArrowDownwardIcon onClick={onMoveDown}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Split Screen">
        <IconButton onClick={section}>
          <SplitscreenIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add New Question">
        <IconButton onClick={onAddNewForm}>
          <AddToPhotosIcon />
        </IconButton>
      </Tooltip>
    </ButtonGroup>
  );
}
