import React from 'react'
import { Link } from 'react-router-dom'

const PagesList = (props) => {
  return (
    <div className='pages_list' onMouseEnter={props.handlePopupOpen} onMouseLeave={props.handlePopupClose} >
      <Link className='pages_link' to="/pages/room-details" onClick={props.handlePopupClose}  >Room Details</Link>
      <Link className='pages_link' to="/pages/blog-details" onClick={props.handlePopupClose}  >Blog Details</Link>
      <Link className='pages_link' to="/pages/family-room" onClick={props.handlePopupClose}  >Family Room</Link>
      <Link className='pages_link' to="/pages/premium-room" onClick={props.handlePopupClose}  >Premium Room</Link>
    </div>
  )
}

export default PagesList