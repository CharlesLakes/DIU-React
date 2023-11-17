import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Paper, Box, Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dataForDate, setDataForDate] = useState({});
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const isoDate = date.toISOString().split('T')[0];
    if (isoDate === '2023-10-10') {
      setDataForDate({
        date: date,
        data: 'Reunión Gestion de Ventas',
      });
    } else if (isoDate === '2023-10-15') {
      setDataForDate({
        date: date,
        data: 'Reunión Gestion de Organizacion y Equipos',
      });
    } else if (isoDate === '2023-10-23') {
      setDataForDate({
        date: date,
        data: 'Reunión SCRUM y Gestion de Proyectos',
      });
    }
    else if (isoDate === '2023-10-29') {
      setDataForDate({
        date: date,
        data: 'Reunión Gestion de Pagos',
      });
    }
    else if (isoDate === '2023-11-21') {
      setDataForDate({
        date: date,
        data: 'Reunión Gestion de Pagos',
      });
    }
    else if (isoDate === '2023-11-23') {
      setDataForDate({
        date: date,
        data: 'Reunión Gestion de Organizacion y Equipos',
      });
    }
    else if (isoDate === '2023-11-24') {
      setDataForDate({
        date: date,
        data: 'Reunión SCRUM y Gestion de Proyectos',
      });
    }
     else {
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
    const dates = new Set(['2023-10-10', '2023-10-15', '2023-10-23', '2023-10-29', '2023-11-21', '2023-11-23', '2023-11-24'])
    const aux = date.toISOString().split('T')[0]
    const hasData = dates.has(aux)
    return (
      <div>
        {hasData && <EventIcon style={{ color: 'red' }} />}
      </div>
    );
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
    </div>
  );
};

export default CalendarComponent;
