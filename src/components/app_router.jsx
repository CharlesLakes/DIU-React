import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from '../pages/home'
import Notifications from '../pages/notifications'
import Tasks from '../pages/tasks'
import InternalPage from '../pages/internal'
import Calendar from '../pages/calendar'
import Recording from '../pages/recordings'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/notificaciones' element={<Notifications />} />
        <Route path='/tareas-asginadas' element={<Tasks />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/calendario' element={<Calendar />} />
        <Route path='/grabaciones' element={<Recording />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
