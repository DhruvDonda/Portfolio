import React, { useMemo } from "react";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-white text-dark py-3 shadow-lg text-center">
      <p className="mb-0">&copy; {currentYear} Dhruv Donda. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
