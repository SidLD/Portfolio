import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>NotFound
        <p>Go to Home <Link to="/">Homepage</Link>.</p>
    </div>

  )
}

export default NotFound