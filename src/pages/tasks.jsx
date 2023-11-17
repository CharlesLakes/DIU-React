import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Paper, Box, Typography, TextField, Button, Alert} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TasksTitleStyles = {
    width: "300px",
    textAlign:"center",
    padding:"5px 0px",
    margin: "5px 0px"
};

const TasksListItemStyles = {
    marginTop: "10px",
    width: "300px",
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center"
};

const Tasks = () => {
    const navigate = useNavigate();
    const [toggle,setToggle] = useState(false);

    return(
        <div className='page'>
            <ArrowBackIcon fontSize='large' style={{cursor:"pointer"}} onClick={() => navigate('/')} />
            <div className='menu'>
                <h2 style={TasksTitleStyles}>Tareas asginadas</h2>
                <div>
                    <Paper style={TasksListItemStyles}>
                        Realizar registro de datos de prueba antes de la reunión de "SCRUM y Gestion de Proyectos" el dia 23-10-2023 a las 12:00hrs
                    </Paper>
                    <Paper style={TasksListItemStyles}>
                        Tener listas las tareas de la semana antes de la reunión de "Gestión de pagos" el día 29-10-2023 a las 16:00hrs
                    </Paper>
                </div>
                <h2 style={TasksTitleStyles}>Asignar tarea</h2>
                <Box mt={2}>
                    <Paper style={{padding: "5px"}}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",flexDirection: "column",width: "100%"}}>
                            <h3>Nueva tarea</h3>
                            {toggle?(<Alert severity="success" style={{marginBottom: "5px"}}>Tarea registrada con exito!</Alert>):''}
                            <TextField name="desc" id="outlined-basic" label="Nombre de usuario" variant="outlined" style={{width: "90%",marginBottom:"10px"}} />
                            <TextField name="desc" id="outlined-basic" label="Descipción" variant="outlined" style={{width: "90%"}} />
                            <Button type='submit' onClick={() => {setToggle(true);}} variant="contained" style={{width: "80%",margin: "10px 0px"}}>Añadir</Button>
                        </div>
                    </Paper>
                </Box>
                
            </div>
        </div>
    );
}

export default Tasks;

