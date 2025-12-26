import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Footer from "../components/Footer";

export default function Hero() {
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  const enterWorld = () => {
  const el = overlayRef.current;
  if (!el) return;

  el.classList.add("on");
  setTimeout(() => navigate("/creators"), 350);
  setTimeout(() => el.classList.remove("on"), 700);
  };

    return (
      <>
      <div className="page">
        <div ref={overlayRef} className="transition-overlay" />
        <main className="hero">
          <h1 className="hero-creator">Creatorverse</h1>
          <p className="hero-subtitle">Discover and manage your favorite creators</p>
          <button onClick={enterWorld} aria-label="enter world" className="contrast"> Enter World </button>
        </main>
          <Footer />
        </div>
      </>
    );
  }