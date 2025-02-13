import React, { useState, useCallback } from "react";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const menuItems = [
    { title: "Home", href: "#home" },
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Portfolio
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✖" : "☰"}
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {menuItems.map(({ title, href }) => (
              <li className="nav-item" key={href}>
                <a
                  className="nav-link text-dark hover-effect"
                  href={href}
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
