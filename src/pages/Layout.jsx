import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="page">
        <main className="container">
          <nav>
            <ul>
              <li><strong>Creatorverse 🎨</strong></li>
            </ul>
            <ul>
              <li><a href="/creators">View Creators</a></li>
              <li><a href="/add">Add Creator</a></li>
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

