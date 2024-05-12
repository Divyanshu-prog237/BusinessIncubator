import React from 'react'
import { Link } from 'react-router-dom'
//Footer
import facebook from '../assets/images/facebook (6).png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter (3).png'
import youtube from '../assets/images/youtube.png'
import Logo from '../assets/logo.png'
import ios from '../assets/images/ios.svg'
//Footer END
import incub7 from '../assets/incub7.jpg'
import incub8 from '../assets/incub8.jpeg'

const Features = () => {
  return (
    <div><>
    
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>Business Incubator</title>
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
                  <Link className="dropdown-item" to="/SignUp">
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
    <main>
      <div className="container">
        <section className="page-header">
          <h2>Amazing Features</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb foi-breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/Home">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </section>
        <section className="foi-page-section">
          <div className="row mb-5">
            <div className="col-md-4 foi-feature">
              <img
                src={incub7}
                alt="icon"
                className="feature-icon1"
              />
              <h5 className="feature-title">Physical Workspace</h5>
              <p className="feature-content">
              They often provide office space, meeting rooms, and sometimes laboratories or workshop areas. This gives startups a professional environment to work and collaborate.
              </p>
              <a href="#!" className="feature-link">
                Find out More
              </a>
            </div>
            <div className="col-md-4 foi-feature">
              <img
                src={incub8}
                alt="icon"
                className="feature-icon1"
              />
              <h5 className="feature-title">Infrastructure and Utilities</h5>
              <p className="feature-content">
              Facilities like internet connectivity, electricity, water, heating/cooling systems,
               and office equipment are usually provided.
              </p>
              <a href="#!" className="feature-link">
                Find out More
              </a>
            </div>
            <div className="col-md-4 foi-feature">
              <img
                src={incub7}
                alt="icon"
                className="feature-icon1"
              />
              <h5 className="feature-title">Mentorship and Coaching</h5>
              <p className="feature-content">
              They provide access to experienced mentors and coaches 
              who offer guidance on various aspects of business development, strategy, and management.
              </p>
              <a href="#!" className="feature-link">
                Find out More
              </a>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-4 foi-feature">
              <h5 className="feature-title">Business Support Services</h5>
              <p className="feature-content">
              This includes assistance with business planning, market research, financial
               modeling, and access to legal and accounting services.
              </p>
              <a href="#!" className="feature-link">
                Find out More
              </a>
            </div>
            <div className="col-md-4 foi-feature">
              <h5 className="feature-title">Legal and Regulatory Guidance</h5>
              <p className="feature-content">
              They provide guidance on legal and regulatory compliance, business structuring, contracts,
               licensing, permits, and other legal matters relevant to startups.
              </p>
              <a href="#!" className="feature-link">
                Find out More
              </a>
            </div>
            <div className="col-md-4 foi-feature">
              <h5 className="feature-title">Networking Opportunities</h5>
              <p className="feature-content">
              Incubators facilitate networking events, workshops, seminars, and conferences where startups
               can meet mentors, investors, industry experts, and other entrepreneurs. 
              </p>
              <a href="#!" className="feature-link">
                Find out More
              </a>
            </div>
            <div className="col-md-4 foi-feature">
              <h5 className="feature-title">Technology and Innovation Support</h5>
              <p className="feature-content">
              For startups working on tech-based products or services, incubators
               may offer access to specialized equipment, software, research facilities, and technical expertise.
              </p>
              <a href="#!" className="feature-link">
                Find out More
              </a>
            </div>
            <div className="col-md-4 foi-feature">
              <h5 className="feature-title">Access to Corporate Partnerships</h5>
              <p className="feature-content">
              Some incubators have partnerships with established corporations, allowing startups to collaborate on 
              projects, access corporate resources, and explore business development opportunities.
              </p>
              <a href="#!" className="feature-link">
                Find out More
              </a>
            </div>
            <div className="col-md-4 foi-feature">
              <h5 className="feature-title">Community and Collaboration</h5>
              <p className="feature-content">
              Being part of an incubator often means being part of a community of like-minded entrepreneurs.
               This environment fosters collaboration, knowledge sharing, and mutual support among startups.
              </p>
              <a href="#!" className="feature-link">
                Find out More
              </a>
            </div>
          </div>
        </section>
        <section className="foi-page-section">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                src="assets/images/img_3.png"
                alt="faq"
                className="img-fluid"
                width="424px"
              />
            </div>
            <div className="col-md-6">
              <h2 className="feature-faq-title">Awesome Interface</h2>
              <div className="card feature-faq-card">
                <div className="card-header bg-white" id="featureFaqOneTitle">
                  <a
                    href="#featureFaqOneCollapse"
                    className="d-flex align-items-center"
                    data-toggle="collapse"
                  >
                    <h5 className="mb-0">How can I get a refund?</h5>{" "}
                    <i className="far fa-plus-square ml-auto" />
                  </a>
                </div>
                <div
                  id="featureFaqOneCollapse"
                  className="collapse"
                  aria-labelledby="featureFaqOneTitle"
                >
                  <div className="card-body">
                    <p className="mb-0 text-gray">
                      Lorem Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card feature-faq-card">
                <div className="card-header bg-white" id="featureFaqTwoTitle">
                  <a
                    href="#featureFaqTwoCollapse"
                    className="d-flex align-items-center"
                    data-toggle="collapse"
                  >
                    <h5 className="mb-0">Which license should I need?</h5>{" "}
                    <i className="far fa-plus-square ml-auto" />
                  </a>
                </div>
                <div
                  id="featureFaqTwoCollapse"
                  className="collapse"
                  aria-labelledby="featureFaqTwoTitle"
                >
                  <div className="card-body">
                    <p className="mb-0 text-gray">
                      Lorem Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card feature-faq-card">
                <div className="card-header bg-white" id="featureFaqThreeTitle">
                  <a
                    href="#featureFaqThreeCollapse"
                    className="d-flex align-items-center"
                    data-toggle="collapse"
                  >
                    <h5 className="mb-0">
                      How do I get a receipt for my purchase?
                    </h5>{" "}
                    <i className="far fa-plus-square ml-auto" />
                  </a>
                </div>
                <div
                  id="featureFaqThreeCollapse"
                  className="collapse"
                  aria-labelledby="featureFaqThreeTitle"
                >
                  <div className="card-body">
                    <p className="mb-0 text-gray">
                      Lorem Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card feature-faq-card">
                <div className="card-header bg-white" id="featureFaqFourTitle">
                  <a
                    href="#featureFaqFourCollapse"
                    className="d-flex align-items-center"
                    data-toggle="collapse"
                  >
                    <h5 className="mb-0">How do I report an issue?</h5>{" "}
                    <i className="far fa-plus-square ml-auto" />
                  </a>
                </div>
                <div
                  id="featureFaqFourCollapse"
                  className="collapse"
                  aria-labelledby="featureFaqFourTitle"
                >
                  <div className="card-body">
                    <p className="mb-0 text-gray">
                      Lorem Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
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

export default Features