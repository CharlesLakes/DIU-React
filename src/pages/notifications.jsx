import React from 'react'
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

const Notifications = () => {
    const navigate = useNavigate();
    
    return(
        <div className='page'>
            <ArrowBackIcon fontSize='large' style={{cursor:"pointer"}} onClick={() => navigate('/')} />
            <div className='menu'>
                <h2 style={NotificationsTitleStyles}>Notificaciones</h2>
                <div>
                    <p style={NotificationsListItemStyles}>
                        Tienes una reunión sobre "SCRUM y Gestion de Proyectos" el dia 23-10-2023 a las 12:00hrs
                    </p>
                    <p style={NotificationsListItemStyles}>
                        Tienes una reunión sobre "Gestión de pagos" el día 29-10-2023 a las 16:00hrs
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Notifications;

