import React from 'react'
import incub3 from '../assets/incub3.gif'
import about from '../assets/about.gif'
import { Link } from 'react-router-dom'
//Footer
import facebook from '../assets/images/facebook (6).png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter (3).png'
import youtube from '../assets/images/youtube.png'
import Logo from '../assets/logo.png'
import ios from '../assets/images/ios.svg'
//Footer END

import user_1 from '../assets/images/user/user_1.png'
import user_2 from '../assets/images/user/user_2.png'
import user_3 from '../assets/images/user/user_3.png'
import user_4 from '../assets/images/user/user_4.png'
import user_5 from '../assets/images/user/user_5.png'
import user_6 from '../assets/images/user/user_6.png'
import user_7 from '../assets/images/user/user_7.png'
import user_8 from '../assets/images/user/user_8.png'

const About = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>FOI App Landing Page</title>
    <link
      rel="stylesheet"
      href="assets/vendors/fontawesome-free/css/all.min.css"
    />
    <link rel="stylesheet" href="assets/css/style.css" />
    <header className="foi-header">
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
          <Link className="navbar-brand" to="/Home">
            <img src={Logo} alt="FOI" 
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
              <li className="nav-item">
                <Link className="nav-link" to="/Features">
                  Features
                </Link>
              </li>
              <li className="nav-item dropdown">
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
                  <Link className="dropdown-item" to="/Login">
                    Login
                  </Link>
                  <Link className="dropdown-item" to="/SIgnUp">
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
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/Contact2">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/Services">
                  Services
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item mr-2 mb-3 mb-lg-0">
                <Link className="btn btn-secondary" to="/SignUp">
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
    </header>
    <main className="page-about">
      <div className="container">
        <section className="page-header">
          <h1>About</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb foi-breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </section>
        <section className="foi-page-section pt-0">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0 pr-lg-0">
              <h2 className="about-section-one-title">
                We provides support and resources to startup{" "}
                <span className="font-weight-normal">
                  {" "}
                  and early-stage companies.
                </span>
              </h2>
              <div className="about-section-one-content">
                <p>
                  At Business Incubator, we're your launchpad for success. Our
                  team is dedicated to nurturing the next generation of innovators
                  and entrepreneurs. With a suite of support services, including
                  mentorship, funding opportunities, and shared workspace, we
                  empower startups to thrive. Join us on this exciting journey as
                  we help turn your business dreams into reality.
                </p>
                <p>
                  Incubators often provide affordable office space or co-working
                  areas for startups.
                </p>
                <p className="mb-0">
                  {" "}
                  Incubators can connect startups with potential investors,
                  customers, and partners.
                </p>
              </div>
            </div>
            <div className="col-md-6 pl-lg-0 d-flex align-items-center align-items-lg-end">
              <img
                src={incub3}
                alt="about"
                className=""
                width="600px"
                height="700px"
                marginTop='100px'                
              />
            </div>
          </div>
        </section>
        <section className="foi-page-section">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                src={about}
                alt="about 2"
                className="w-100 img-fluid pr-md-5"
                width="500px"
              />
            </div>
            <div className="col-md-6">
              <h2 className="about-section-two-title">
                We create the best{" "}
                <span className="font-weight-normal">
                  solution for you and your business.
                </span>
              </h2>
              <div className="about-section-two-content">
                <p>
                  {" "}
                  We offers mentorship, business plan development assistance,
                  marketing and accounting advice, and other business support
                  services,{" "}
                </p>
                <p>
                  {" "}
                  Joining a business incubator can be a great way to get your
                  business off the ground. Incubators can provide you with the
                  resources and support you need to succeed.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="foi-page-section mb-5">
          <h5 className="text-center font-os mb-0">The amazing team</h5>
          <h2 className="team-section-title">Our Creative Minds</h2>
          <div className="row">
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src={user_1}
                  alt="Cardarion Hart"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Cardarion Hart</h6>
                <p className="team-member-designation">CEO</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src={user_2}
                  alt="Gauthier Drewitt"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Gauthier Drewitt</h6>
                <p className="team-member-designation">HR Manager</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src={user_3}
                  alt="Labeeba Al Amer"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Labeeba Al Amer</h6>
                <p className="team-member-designation">Finance Manager</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src={user_4}
                  alt="Onyama Limba"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Onyama Limba</h6>
                <p className="team-member-designation">Software Engineer</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src={user_5}
                  alt="Athar Malakooti"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Athar Malakooti</h6>
                <p className="team-member-designation">CEO</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src={user_6}
                  alt="Kung Jiyeon"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Kung Jiyeon</h6>
                <p className="team-member-designation">HR Manager</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src={user_7}
                  alt="Mathijn Agter"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Mathijn Agter</h6>
                <p className="team-member-designation">Finance Manager</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src={user_8}
                  alt="Jontray Arnold"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Jontray Arnold</h6>
                <p className="team-member-designation">Software Engineer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer className="foi-footer text-white">
      <div className="container">
        <div className="row footer-content">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <h2 className="mb-0">
              Do you want to know more or just have a question? write to us.
            </h2>
          </div>
          <div className="col-md-4 col-lg-5 col-xl-6 py-3 py-md-0 d-md-flex align-items-center justify-content-end">
            <Link to="/Contact2" className="btn btn-danger btn-lg">
              Contact form
            </Link>
          </div>
        </div>
        <div className="row footer-widget-area">
          <div className="col-md-3">
            <div className="py-3">
              <img src={Logo} 
              height={120}
              style={{ marginTop: "-8px", marginBottom: "-8px" }}
              alt="FOI" />
            </div>
            <p className="font-os font-weight-semibold mb3">Get our mobile app</p>
            <div>
              <button className="btn btn-app-download mr-2">
                <img src={ios} alt="App store" />
              </button>
              <button className="btn btn-app-download">
                <img src={ios} alt="play store" />
              </button>
            </div>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Account
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    My tasks
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Edit profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Activity
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Careers{" "}
                    <span className="badge badge-pill badge-secondary ml-3">
                      Hiring
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Shop with us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <p>
              © business Incubators 2024{" "}
              <a
                href="https://www.bootstrapdash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset"
              >

              </a>
              .
            </p>
            <p>All rights reserved.</p>
            <nav className="social-menu">
              <a href="#!">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#!">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#!">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#!">
                <img src={youtube} alt="youtube" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  </>
  </div>
  )
}

export default About