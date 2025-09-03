import { useState } from 'react'
import './App.css'
import Reviews from './components/Data'
import Testimonial from './components/Testimonial'
function App() {
  return (
    <div className='app'>
     <div className='heading'>
      <h1>Our Testimonials</h1>
     </div>
     <div className='underline'></div>
     <Testimonial key = {Reviews.id} Reviews={Reviews}/>
    </div>
  )
}

export default App
