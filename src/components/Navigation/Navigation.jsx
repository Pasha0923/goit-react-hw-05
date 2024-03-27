import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const Navigation = ({ children }) => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={getNavLinkClassNames} to="/">
          Home
        </NavLink>
        
        <NavLink className={getNavLinkClassNames} to="/movies">
          Movies
        </NavLink>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Navigation;
