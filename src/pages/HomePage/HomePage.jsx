import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo.jsx";
import css from "./HomePage.module.css";
import { ThreeCircles } from "react-loader-spinner"; // Import the spinner
import { useState } from "react"; // Import useState

function HomePage() {
  const [loading, setLoading] = useState(false); // Loading state

  const handleViewNowClick = () => {
    setLoading(true); // Set loading to true when the button is clicked
    // Simulate a delay for loading (e.g., fetching data)
    setTimeout(() => {
      // Redirect to the catalog after a delay
      window.location.href = "/catalog"; // You can also use navigate('/catalog') if using useNavigate
    }, 2000); // 2 seconds delay
  };

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
        {loading ? (
          <ThreeCircles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="loading"
            visible={true}
          />
        ) : (
          <>
            <h1 className={css.headerText}>Campers of your dreams</h1>
            <p className={css.text}>
              You can find everything you want in our catalog
            </p>
            <button className={css.button} onClick={handleViewNowClick}>
              View Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
