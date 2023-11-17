import React from 'react'
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Paper } from '@mui/material';

const NotificationsTitleStyles = {
    borderBottom:"solid 1px black",
    width: "300px",
    textAlign:"center",
    padding:"5px 0px",
    margin: "0"
};

const NotificationsListItemStyles = {
    width: "300px",
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
    margin: "10px 0px"
};

const Notifications = () => {
    const navigate = useNavigate();
    
    return(
        <div className='page'>
            <ArrowBackIcon fontSize='large' style={{cursor:"pointer"}} onClick={() => navigate('/')} />
            <div className='menu'>
                <h2 style={NotificationsTitleStyles}>Notificaciones</h2>
                <div>
                    <Paper style={NotificationsListItemStyles}>
                        Tienes una reunión sobre "SCRUM y Gestion de Proyectos" el dia 23-10-2023 a las 12:00hrs
                    </Paper>
                    <Paper style={NotificationsListItemStyles}>
                        Tienes una reunión sobre "Gestión de pagos" el día 29-10-2023 a las 16:00hrs
                    </Paper>
                </div>
            </div>
        </div>
    );
}

export default Notifications;

