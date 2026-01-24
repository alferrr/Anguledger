import { useState, useEffect } from "react";

import "../App.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <h1>Anguledger</h1>
      <nav>
        <ul>
          <li>
            <a href="#why">Why Anguledger</a>
          </li>
          <li>
            <a href="#how">How It Works</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </nav>
      <a href="https://anguledger-app.vercel.app/dashboard" className="cta">
        Get Started Now
      </a>
    </div>
  );
}
