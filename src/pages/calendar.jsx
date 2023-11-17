import React,{useState} from 'react'
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

let init_info = [
    {
        date: '2023-10-10',
        content: 'Reunión Gestion de Ventas'
    },
    {
        date: '2023-10-15',
        content: 'Reunión Gestion de Organizacion y Equipos'
    },
    {
        date: '2023-10-23',
        content: 'Reunión SCRUM y Gestion de Proyectos'
    },
    {
        date: '2023-10-29',
        content: 'Reunión Gestion de Pagos'
    },
    {
        date: '2023-11-21',
        content: 'Reunión Gestion de Pagos'
    },
    {
        date: '2023-11-23',
        content: 'Reunión Gestion de Organizacion y Equipos'
    },
    {
        date: '2023-11-24',
        content: 'Reunión SCRUM y Gestion de Proyectos'
    },
]

const Calendar = () => {
    const navigate = useNavigate();
    return(
        <div className='page'>
            <ArrowBackIcon fontSize='large' style={{cursor:"pointer"}} onClick={() => navigate('/')} />
            <div className='menu'>
                <h2 style={NotificationsTitleStyles}>Calendario</h2>
                <CalendarComponent info={init_info} />
            </div>

        </div>
    );
}

export default Calendar;