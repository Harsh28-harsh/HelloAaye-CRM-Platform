import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "../../styles/navbar.css";

const navLinks = [
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-wrapper">
        <a href="#" className="logo">
          Hello<span>Aaye</span>
        </a>

        <nav className={menuOpen ? "nav active" : "nav"}>
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}

          <a
            href="#contact"
            className="contact-btn"
            onClick={() => setMenuOpen(false)}
          >
            Contact Sales
          </a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;