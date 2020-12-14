import React from "react";
import { Container } from "react-bootstrap"

function Footer () {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container className="text-center text-primary bg-dark">
        <div className="footer-content">
          <span>© Kirts {year}</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
