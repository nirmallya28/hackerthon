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
        justifyContent: 'space-between', // Adds space between icons
      }}
    >
      <BottomNavigationAction label="Ticket Booking" icon={<ConfirmationNumberIcon />} />
      <BottomNavigationAction label="Train Enquiry" icon={<TrainIcon />} />
      <BottomNavigationAction label="Retiring Room" icon={<EventSeatIcon />} />
      <BottomNavigationAction label="Indian Railways" icon={<DirectionsRailwayIcon />} />
      <BottomNavigationAction label="UTS Ticketing" icon={<BusinessCenterIcon />} />
      <BottomNavigationAction label="Freight Booking" icon={<LocalShippingIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
