import React from 'react'
import {Link} from 'react-router-dom'

const BottomSubscribe = () => {
    return (
        <div className="container">
        <Link to="/subscribe"><button title="Toggle Theme" className="toggle-theme" /></Link>
        <button className="hover-button">
          subscribe
        </button>
      </div>
    )
}

export default BottomSubscribe
