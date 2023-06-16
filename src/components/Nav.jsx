import React from "react";
import '../styles/nav.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="header-div">
        <nav className="header-div__nav">
          <section className="nav-sectionMenu">
            {routes.map((route) => {
              if (route.private) return null
              return (
                <NavLink key={route.to}
                  style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}
                  to={route.to}
                >
                  {route.text}
                </NavLink>
              )
            })}
          </section>
          <section className="nav-sectionButton">
            <div>
              <a href="../../public/files/Abril Gonzalez CV.pdf" download>
                Descargar CV
              </a>
            </div>
          </section>
        </nav>
      </div>
    </header>
  );
}
export default Nav;

const routes = [];
routes.push({
  to: "/",
  text: "INICIO",
  private: false
});
routes.push({
  to: "/about-me",
  text: "SOBRE MÍ",
  private: false
});
routes.push({
  to: "/mi-jobs",
  text: "MIS PROYECTOS",
  private: false
});
