import React, { SyntheticEvent } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/AuthContext";
import { useContext } from "react";

interface NavigationProps {
  onLogout: (e: SyntheticEvent) => void;
}

const Navigation = ({ onLogout }: NavigationProps) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
