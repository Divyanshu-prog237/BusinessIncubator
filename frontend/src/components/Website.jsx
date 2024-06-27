import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Website = () => {
  return (
    <div>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
            <Link className="navbar-brand" to="/Admin/base">
              <img className='Logoo' src={Logo} alt="FOI"
                height={50}

                style={{ marginTop: "-8px", marginBottom: "-8px" }}
              />
            </Link>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/Home">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link" to="/Features">
                  Features
                </Link>
              </li> */}
                {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Pages"

                >
                  Pages
                </Link>
                <div className="dropdown-menu" aria-labelledby="pagesMenu">
                  <Link className="dropdown-item" href="blog.html">
                    Blog
                  </Link>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                  <Link className="dropdown-item" to="/Register">
                    Register
                  </Link>
                  <Link className="dropdown-item"  to="/Faq">
                    FAQ
                  </Link>
                  <Link className="dropdown-item" to="/Blog">
                    Single blog
                  </Link>
                  <Link className="dropdown-item" to="/Privacypolicy">
                    Privacy policy
                  </Link>
                </div>
              </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact2">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Website">
                    Website Development
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item mr-2 mb-3 mb-lg-0">
                  <Link className="btn btn-secondary" to="/Signup">
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-secondary" to="/Login">
                    Login
                  </Link>
                </li>
          
              </ul>
            </div>
          </nav>
          </div>
          <div>
            <h1>jkjsds</h1>
          </div>
    </div>
  )
}

export default Website