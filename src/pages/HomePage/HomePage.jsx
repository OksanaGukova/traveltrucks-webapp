import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo.jsx';
import css from './HomePage.module.css'

function HomePage() {
  return (
    <div>
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
      <div className={css.textContainer}>
        <h1 className={css.headerText}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <NavLink to="/catalog">
          <button className={css.button}>View Now</button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage