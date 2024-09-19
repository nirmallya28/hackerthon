// src/VoiceRecognition.js
import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

function VoiceRecognition({ onResult }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.onresult = (event) => {
    const currentTranscript = event.results[0][0].transcript;
    setTranscript(currentTranscript);
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
  };

  useEffect(() => {
    if (transcript) {
      const timer = setTimeout(() => {
        onResult(transcript);
        setTranscript('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [transcript, onResult]);

  const handleListen = () => {
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening(!isListening);
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <IconButton
        onClick={handleListen}
        sx={{
          backgroundColor: isListening ? 'red' : 'blue',
          color: 'white',
          borderRadius: '50%',
          width: 60,
          height: 60,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: isListening ? 'darkred' : 'darkblue',
          },
        }}
      >
        {isListening ? <MicOffIcon /> : <MicIcon />}
      </IconButton>
    </Box>
  );
}

export default VoiceRecognition;
