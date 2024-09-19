// src/Sidebar.js
import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const drawerWidth = 240;

function Sidebar() {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        width: { md: drawerWidth },
        flexShrink: { md: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          display: { xs: 'none', md: 'block' },
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <ConfirmationNumberIcon />
            </ListItemIcon>
            <ListItemText primary="Ticket Booking" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TrainIcon />
            </ListItemIcon>
            <ListItemText primary="Train Enquiry" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EventSeatIcon />
            </ListItemIcon>
            <ListItemText primary="Retiring Room Booking" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DirectionsRailwayIcon />
            </ListItemIcon>
            <ListItemText primary="Indian Railways" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="UTS Ticketing" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary="Freight Booking" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="Railway Parcel Website" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
