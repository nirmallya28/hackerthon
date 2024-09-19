// src/ChatBubble.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function ChatBubble({ message, isUser }) {
  return (
    
    <Box
      sx={{
        maxWidth: '70%',
        p: 2,
        m: 1,
        borderRadius: 2,
        bgcolor: isUser ? 'primary.main' : 'secondary.main',
        color: 'white',
        alignSelf: isUser ? 'flex-end' : 'flex-start',
      }}
    >
      <Typography variant="body1">{message}</Typography>
    </Box>
    
  );
}

export default ChatBubble;

