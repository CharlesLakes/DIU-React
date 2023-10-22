import React from 'react'
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TasksTitleStyles = {
    borderBottom:"solid 1px black",
    width: "300px",
    textAlign:"center",
    padding:"5px 0px",
    margin: "0"
};

const TasksListItemStyles = {
    border: "solid 1px black",
    width: "300px",
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center"
};

const Tasks = () => {
    const navigate = useNavigate();


    return(
        <div className='page'>
            <ArrowBackIcon fontSize='large' style={{cursor:"pointer"}} onClick={() => navigate('/')} />
            <div className='menu'>
                <h2 style={TasksTitleStyles}>Tareas</h2>
                <div>
                    <p style={TasksListItemStyles}>
                        Realizar registro de datos de prueba antes de la reunión de "SCRUM y Gestion de Proyectos" el dia 23-10-2023 a las 12:00hrs
                    </p>
                    <p style={TasksListItemStyles}>
                        Tener listas las tareas de la semana antes de la reunión de "Gestión de pagos" el día 29-10-2023 a las 16:00hrs
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tasks;

