import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
        <h3 className='intro-title'>Oh oh, Page Not Found</h3>
        <p className='intro-title'>Go to Home <Link to="/" className='intro-title'>Homepage</Link>.</p>
    </div>

  )
}

export default NotFound