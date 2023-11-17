import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Paper, Box, Typography, TextField, Button} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const CalendarComponent = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dataForDate, setDataForDate] = useState({});
  const [info,setInfo] = useState(props.info?props.info:[]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const isoDate = date.toISOString().split('T')[0];
    let date_found = false;
    for(const element of info){
      if(isoDate === element.date){
        setDataForDate({
          date: date,
          data: element.content,
        });
        date_found = true;
        break;
      }
    }
    if(!date_found){
      setDataForDate({
        date: date,
        data: 'No hay eventos para este dia',
      });
    }

  };

  const formatDayAbbreviation = (date) => {
    const options = { weekday: 'short' };
    const dayAbbreviation = new Intl.DateTimeFormat('es-ES', options).format(date);
    return dayAbbreviation.toUpperCase();
  };

  const customTileContent = ({ date }) => {
    const dates = [];
    for(const element of info) dates.push(element.date);
    const dates_hash = new Set(dates)
    const aux = date.toISOString().split('T')[0]
    const hasData = dates_hash.has(aux)
    return (
      <div>
        {hasData && <EventIcon style={{ color: 'red' }} />}
      </div>
    );
  };

  const addTask = (e) => {
    e.preventDefault();
    const isoDate = selectedDate.toISOString().split('T')[0];
    
    setInfo(element => [...element,{date: isoDate,content: e.target.desc.value}]);
    setDataForDate({
      date: selectedDate,
      data: e.target.desc.value,
    });
    e.target.desc.value = '';
  };

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        locale="es-ES"
        tileContent={customTileContent}
      />
      <Box mt={2}>
        {selectedDate && (
          <Paper>
            <Typography variant="h5">{formatDayAbbreviation(selectedDate)} {selectedDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
            <Typography variant="body1">{dataForDate.data}</Typography>
          </Paper>
        )}
      </Box>
      <Box mt={2}>
        {selectedDate && (
          <Paper>
            <Typography variant="h5" style={{textAlign:"center"}}>Añadir evento</Typography>
            <form onSubmit={addTask} style={{display: "flex", justifyContent: "center", alignItems: "center",flexDirection: "column",width: "100%"}}>
              <TextField name="desc" id="outlined-basic" label="Descipción" variant="outlined" style={{width: "90%"}} />
              <Button type='submit' variant="contained" style={{width: "80%",margin: "5px 0px"}}>Añadir</Button>
            </form>
          </Paper>
        )}
      </Box>
    </div>
  );
};

export default CalendarComponent;
