import React from 'react'
import Homepage from './pages/homepage'
import CreatePage from './pages/createpage'
import NoteDetailPage from './pages/notedetailpage'
import { Route, Routes } from 'react-router'
import toast, { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <div className="relative hfull wfull">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App  
