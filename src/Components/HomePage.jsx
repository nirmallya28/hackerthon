// src/HomePage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ChatArea from './ChatArea.jsx';
import Account from './Account.jsx';
import Sidebar from './Sidebar.jsx';
import BottomNav from './BottomNav.jsx';

function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Container sx={{ flexGrow: 1, pb: { xs: 7, md: 0 } }}>
        <Account />
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Macbeth UI
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Your AI Railway Assistant
          </Typography>
          <ChatArea />
        </Box>
      </Container>
      <Sidebar />
      <BottomNav />
    </Box>
  );
}

export default HomePage;
