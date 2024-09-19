// src/TypingIndicator.js
import React from 'react';
import { Box } from '@mui/material';

function TypingIndicator() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
      <Box sx={{ width: 8, height: 8, bgcolor: 'grey.500', borderRadius: '50%', mx: 0.5, animation: 'blink 1.4s infinite both' }} />
      <Box sx={{ width: 8, height: 8, bgcolor: 'grey.500', borderRadius: '50%', mx: 0.5, animation: 'blink 1.4s infinite both', animationDelay: '0.2s' }} />
      <Box sx={{ width: 8, height: 8, bgcolor: 'grey.500', borderRadius: '50%', mx: 0.5, animation: 'blink 1.4s infinite both', animationDelay: '0.4s' }} />
      <style>
        {`
          @keyframes blink {
            0%, 80%, 100% { opacity: 0; }
            40% { opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
}

export default TypingIndicator;
