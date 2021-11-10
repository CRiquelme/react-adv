import { Suspense } from "react";
import { Navigate, NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import logo from '../logo.svg'
import { routes } from "./routes";

export const Navigation = () => {
  return (
    // Mientras está cargando React pide mostrar algo
    <Suspense fallback={ <span>Loading...</span> }>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {
                routes.map(({path, name}) => {
                  return (
                    <li key={path}>
                      <NavLink
                        to={path}
                        className={({ isActive }) => isActive ? 'nav-active' : '' }
                      >
                        {name}
                      </NavLink>
                    </li>
                  );
                })
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(({path, component:Component}) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={<Component />} />
                );
              })
            }
            <Route path="/" element={<Navigate to={routes[0].path} /> } />
          </Routes>

        </div>
      </Router>
    </Suspense>
  );
}