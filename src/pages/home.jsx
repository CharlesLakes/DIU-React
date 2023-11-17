import React from 'react'
import { useNavigate } from "react-router-dom";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicIcon from '@mui/icons-material/Mic';
import TaskIcon from '@mui/icons-material/Task';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';

import NavBar from '../components/nav_bar'


const ListItemStyle = {
  borderBottom: "solid 1px black"
};

const HomePage = () => {
  const navigate = useNavigate();


  return (
    <div className='page'>
      <div className='menu'>
        <List style={{width:"300px"}}>
          <ListItem 
            onClick={()=> navigate('notificaciones')}
            disablePadding style={{...ListItemStyle,borderTop:"solid 1px black"}}>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notificaciones" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            onClick={()=> navigate('tareas-asginadas')}
            disablePadding style={ListItemStyle}>
            <ListItemButton>
              <ListItemIcon>
                <TaskIcon />
              </ListItemIcon>
              <ListItemText primary="Tareas" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            onClick={()=> navigate('calendario')}
            disablePadding style={ListItemStyle}>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Calendario" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            onClick={()=> navigate('grabaciones')}
            disablePadding style={ListItemStyle}>
            <ListItemButton>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Grabaciones" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </div>
  )
}

export default HomePage
