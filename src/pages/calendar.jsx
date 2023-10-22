import React from 'react'
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarComponent from '../components/calendar_component';

const NotificationsTitleStyles = {
    borderBottom:"solid 1px black",
    width: "300px",
    textAlign:"center",
    padding:"5px 0px",
    margin: "0"
};

const NotificationsListItemStyles = {
    border: "solid 1px black",
    width: "300px",
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center"
};

const Calendar = () => {
    const navigate = useNavigate();
    
    return(
        <div className='page'>
            <ArrowBackIcon fontSize='large' style={{cursor:"pointer"}} onClick={() => navigate('/')} />
            <div className='menu'>
                <h2 style={NotificationsTitleStyles}>Calendario</h2>
                <CalendarComponent />
            </div>
        </div>
    );
}

export default Calendar;