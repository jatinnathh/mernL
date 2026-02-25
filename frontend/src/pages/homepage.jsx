import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import NoteCard from '../components/NoteCard'
import axios from 'axios'
import toast from 'react-hot-toast'
const Homepage = () => {

  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchedRef = useRef(false)

  useEffect(() => {
    if (fetchedRef.current) return
    fetchedRef.current = true

    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/notes')
        setNotes(res.data)
        console.log(res.data)
        setIsRateLimited(false)
      } catch (error) {
        console.log("error in fetching notes ", error)
        if (error.response?.status === 429) {
          setIsRateLimited(true)
        } else {
          toast.error("something went wrong")
        }

      }
      finally {
        setLoading(false)
      }
    }
    fetchNotes();
  }, [])

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className='max-w-6xl mx-auto px-4 py-8 mt-6'>

        {loading && <div className='text-center text-primary py-10'>Loading...</div>}

        {notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {notes.map(note => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Homepage
