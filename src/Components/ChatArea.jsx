// src/ChatArea.js
import React, { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatBubble from './ChatBubble';
import TypingIndicator from '../js modules/TypingIndicator';
import VoiceRecognition from '../js modules/VoiceRecognition';


function ChatArea() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: 'This is a response from Copilot.', isUser: false }]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleVoiceResult = (transcript) => {
    setInput(transcript);
    handleSend();
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 2 }}>
        <Box sx={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {messages.map((msg, index) => (
            <ChatBubble key={index} message={msg.text} isUser={msg.isUser} />
          ))}
          {isTyping && <TypingIndicator />}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <IconButton color="primary" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Box>
        <VoiceRecognition onResult={handleVoiceResult} />
      </Box>
    </Box>
  );
}

export default ChatArea;
