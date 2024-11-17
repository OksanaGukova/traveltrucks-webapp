
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import css from './Header.module.css'

function Header() {
    return (
       <div className={css.header}>
        <Logo />
        <div className={css.navContainer}>
          <NavLink className={css.nav} to="/">
            Home
          </NavLink>
          <NavLink className={css.nav} to="/catalog">
            Catalog
          </NavLink>
            </div> 
            </div>
  )
         
  
};

export default Header