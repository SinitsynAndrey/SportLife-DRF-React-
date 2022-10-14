import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import { logout } from '../store/slices/userSlice';

function Header() {

  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">SportLife</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">участники</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">мероприятия</Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav mr-auto">
        {user &&
          <>
            <li className="nav-item">
              <span className="nav-link disabled"> {user.username} </span>
            </li>
            <li className="nav-item">
              <button onClick={() => dispatch(logout())} className="nav-link btn">Logout</button>
            </li>
          </>
        }
      </ul>
    </nav >
  )
}


export default Header