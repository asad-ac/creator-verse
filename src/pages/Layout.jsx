import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="page">
        <main className="container">
          <nav>
            <ul>
              <li className="layout-creator"><strong>Creatorverse</strong></li>
            </ul>
            <ul>
              <NavLink to="/creators" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>View Creators</NavLink>
              <NavLink to="/add" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Add Creator</NavLink>
            </ul>
          </nav>
          <Outlet />
        </main>

        <footer className="withlove">
          <div>
            <small>Made with ❤️ by Asad Chaudhry • Miami, FL</small>
          </div>
        </footer>
      </div>
    </>
  );
}

