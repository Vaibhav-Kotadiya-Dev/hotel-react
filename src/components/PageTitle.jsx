import React from 'react'
import { Link } from "react-router-dom";
const PageTitle = (props) => {
  return (
    <>
     <div className="container rooms">
        <h1 className="m-2">{props.title}</h1>
        <div>
          <Link to="/" className="link m-2">
            Home
          </Link>
          {">"}
          <p className="m-2 d-inline" style={{color:"gray"}}>{props.page}</p>
        </div>
      </div>
    </>
  )
}

export default PageTitle