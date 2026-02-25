import React from 'react'
import Homepage from './pages/homepage'
import CreatePage from './pages/createpage'
import NoteDetailPage from './pages/notedetailpage'
import { Route, Routes } from 'react-router'
import toast, { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <div data-theme="coffee">
      <Toaster />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App  
