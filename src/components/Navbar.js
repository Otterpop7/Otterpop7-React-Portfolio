import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{height: "70px"}}>
      <div className="container container-fluid">
        <a className="navbar-brand" href="#">
          Jordan Otterson Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#e1ca96" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setPage(0)}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about-me"
                onClick={() => setPage(1)}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#portfolio"
                onClick={() => setPage(2)}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setPage(3)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
