import React from 'react'
import { Link } from 'react-router-dom'
import plan from '../assets/planning.gif'
import manage from '../assets/management.mp4'
import launch from '../assets/launch2.gif'
import Logo from '../assets/logo.png'
import screenshot from '../assets/screenshott.jpeg'
//Footer
import facebook from '../assets/images/facebook (6).png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter (3).png'
import youtube from '../assets/images/youtube.png'
import anmol from '../assets/anmol11.jpeg'

import ios from '../assets/images/ios.svg'
//Footer END

const Services = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
        <Link className="navbar-brand" to="/Home">
          <img className='Logoo' src={Logo} alt="incubator"
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
              <Link className="nav-link" to="/Contact2">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                Services
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
      <header className='head-img'>

      </header>
      <section className='mt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className='text-center pt-3' style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'maroon' }}>PLANNING</h2>
              <p className='text-center'>Our planning services craft tailored business roadmaps through market research and financial modeling, guiding startups and pivoting businesses for sustainable growth. Partner with us to turn your ideas into a strategically sound plan.</p>
              <div className='text-center'>
                <Link to='/PlanningServices' className='btn btn-outline-danger'>know more</Link>
              </div>
            </div>
            <div className="col-md-5">
              <img src={plan} alt='plan' className='img-fluid ser-img' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src={launch} alt='plan' className='img-fluid' />
            </div>
            <div className="col-md-7">
              <h2 className='text-center pt-5' style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'maroon' }}>LAUNCHING</h2>
              <p className='text-center'>Our launching services propel your business forward, offering expert guidance on locations, marketing, and funding. Partner with us for a seamless and impactful launch, navigating the early stages of your business journey with confidence.</p>
              <div className="text-center">
                <Link to='/LaunchingServices' className='btn btn-outline-danger '>know more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className='text-center pt-5' style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'maroon' }}>MANAGING</h2>
              <p className='text-center'>Our managing services drive ongoing success for your business. From seamless operations to strategic growth planning, we provide comprehensive support. Partner with us for efficient management that ensures your business not only survives but thrives.</p>
              <div className="text-center">
                <Link to='/ManagingServices' className='btn btn-outline-danger'>know more</Link>
              </div>
            </div>
            <div className="col-md-5">
              <video src={manage} alt='plan' className='m-vid' loop autoPlay muted />
            </div>
          </div>
        </div>
      </section>
      <h2 className='port'>Our portfolio</h2>
      <div className='card-container1'>
        <div class="card14" id="scrollingCard">
          <img src={screenshot} alt="Long Screenshot" class="screenshot"></img>
        </div>

        <div class="card14" id="scrollingCard">
          <img src={anmol} alt="Long Screenshot" class="screenshot"></img>
        </div>
        <div class="card14" id="scrollingCard">
          <img src={anmol} alt="Long Screenshot" class="screenshot"></img>
        </div>
      </div>






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
    </div>
  )
}

export default Services