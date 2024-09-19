import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

function BottomNav() {
  return (
    <BottomNavigation
      sx={{ 
        display: { xs: 'flex', md: 'none' }, 
        width: '100%', 
        position: 'fixed', 
        bottom: 0, 
        overflowX: 'auto', // Allows horizontal scrolling
        justifyContent: 'center', // Centers the icons
      }}
    >
      <BottomNavigationAction 
        label="Ticket Booking" 
        icon={<ConfirmationNumberIcon />} 
        sx={{ minWidth: 60, flexShrink: 0 }} // Reduced width
      />
      <BottomNavigationAction 
        label="Train Enquiry" 
        icon={<TrainIcon />} 
        sx={{ minWidth: 60, flexShrink: 0 }} // Reduced width
      />
      <BottomNavigationAction 
        label="Retiring Room" 
        icon={<EventSeatIcon />} 
        sx={{ minWidth: 60, flexShrink: 0 }} // Reduced width
      />
      <BottomNavigationAction 
        label="Indian Railways" 
        icon={<DirectionsRailwayIcon />} 
        sx={{ minWidth: 60, flexShrink: 0 }} // Reduced width
      />
      <BottomNavigationAction 
        label="UTS Ticketing" 
        icon={<BusinessCenterIcon />} 
        sx={{ minWidth: 60, flexShrink: 0 }} // Reduced width
      />
      <BottomNavigationAction 
        label="Freight Booking" 
        icon={<LocalShippingIcon />} 
        sx={{ minWidth: 60, flexShrink: 0 }} // Reduced width
      />
    </BottomNavigation>
  );
}

export default BottomNav;
