import React from "react";

function Footer () {
  const year = new Date().getFullYear();

  return (
    <footer className="container text-center text-primary">
      <span>© Kirts {year}</span>
    </footer>
  )
}

export default Footer;
