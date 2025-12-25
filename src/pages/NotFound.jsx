import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <main className="not-found">
        <h1>404 – Page Not Found</h1>
        <Link to="/creators">
          <button aria-label="home">Home</button>
        </Link>
      </main>
    </div>
  );
}
