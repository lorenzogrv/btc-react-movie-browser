import { NavLink } from 'react-router-dom'

import './Header.scss'
import logo from './tmdb-logo.svg'

export default function Header (props) {
  return (
    <header>
      <NavLink to='/'>
        <figure>
          <img src={logo} alt='The Movie Database Logo' />
          <legend>Browser</legend>
        </figure>
      </NavLink>
      <menu>
        <NavLink to='/configuration'>Configuration</NavLink>
      </menu>
    </header>
  )
}
