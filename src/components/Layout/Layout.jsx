import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Layout.module.css";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
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

export default Layout;
