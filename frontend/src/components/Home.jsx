import React from 'react'
import { Link } from 'react-router-dom'
//import team from '../assets/images/404.png'
import specialization from '../assets/specializations.png.jpeg'
import ios from '../assets/images/ios.svg'
/*import android from '/assets/images/android.svg'*/
import slack from '../assets/images/clients/slack.svg'
import spotify from  '../assets/images/clients/shopify.svg'
import paypal from '../assets/images/clients/paypal.svg'
import amazon from '../assets/images/clients/amazon.svg'
import google from '../assets/images/clients/google.svg'
import Logo from '../assets/logo.png'
import per from '../assets/incub6.png'
import incub1 from '../assets/incub1.gif'
//import incub2 from '../assets/incub2.gif'
import facebook from '../assets/images/facebook (6).png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter (3).png'
import youtube from '../assets/images/youtube.png'
import avatar11 from '../assets/images/avatar/avatar_11.jpg'
import avatar12 from '../assets/images/avatar/avatar_12.jpg'
import avatar13 from '../assets/images/avatar/avatar_13.jpg'


const Home = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>BUSINESS INCUBATOR</title>
    <link
      rel="stylesheet"
      href="assets/vendors/fontawesome-free/css/all.min.css"
    />
    <link rel="stylesheet" href="assets/css/style.css" />
    <header className="foi-header landing-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
          <Link className="navbar-brand" to="/Home">
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
        <div className="header-content">
          <div className="row">
            <div className="col-md-6">
              <h1>
                All ventures are born from a clever idea, but not all new ideas
                end up becoming new companies
              </h1>
              <p className="text-dark">
                Empower Your Startup Journey! We're here to guide you from idea to
                success. Explore our comprehensive services and turn your dreams
                into reality.
              </p>
              <Link className="btn btn-primary mb-4" to="/Roadmap">Get Started</Link>
              <div className="my-2">
                <p className="header-app-download-title">GET OUR MOBILE APP</p>
              </div>
              <div>
                <button className="btn btn-app-download mr-2">
                  <img src={ios} alt="App store" />
                </button>
                <button className="btn btn-app-download">
                  <img src={ios} alt="play store" />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              
              <img src={per} alt="app" width="388px" className="person">
                </img>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section className="py-5 mb-5">
      <div className="container">
        <h2 className="section-title">Our Features</h2>
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5>Mentorship</h5>
            <p className="text-dark">
              Incubators offer guidance, enhancing entrepreneurs' skills for
              startup success.
            </p>
            <p className="mb-5">
              <a href="#!" className="text-primary mb-5">
                Find out More
              </a>
            </p>
            <h5>Networking</h5>
            <p className="text-dark">
              Facilitate connections among entrepreneurs, investors, and experts.
            </p>
            <p className="mb-5">
              <a href="#!" className="text-primary mb-5">
                Find out More
              </a>
            </p>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0">
            <h5>Live Chat</h5>
            <p className="text-dark">
              No matter what kind of home you have to share, you can increase your
              earnings.
            </p>
            <p className="mb-5">
              <a href="#!" className="text-primary mb-5">
                Find out More
              </a>
            </p>
            <h5>Infrastructure support</h5>
            <p className="text-dark">
              Provide essential resources, like office space and technology,
              reducing operational costs for startups.
            </p>
            <p className="mb-5">
              <a href="#!" className="text-primary mb-5">
                Find out More
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <h6 className="text-gray font-os font-weight-semibold">
              Trusted by the world's best
            </h6>
            <div
              id="landingClientCarousel"
              className="carousel slide landing-client-carousel"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="d-flex flex-wrap justify-content-center">
                    <div className="clients-logo">
                      <img
                        src={slack}
                        alt="Slack"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src={spotify}
                        alt="Spotify"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src={paypal}
                        alt="Paypal"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src={amazon}
                        alt="Amazon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src={google}
                        alt="Google"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/samsung.svg"
                        alt="Samsung"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex flex-wrap justify-content-center">
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/slack.svg"
                        alt="Slack"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/spotify.svg"
                        alt="Spotify"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/paypal.svg"
                        alt="Paypal"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/amazon.svg"
                        alt="Amazon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/google.svg"
                        alt="Google"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/samsung.svg"
                        alt="Samsung"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex flex-wrap justify-content-center">
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/slack.svg"
                        alt="Slack"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/spotify.svg"
                        alt="Spotify"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/paypal.svg"
                        alt="Paypal"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/amazon.svg"
                        alt="Amazon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/google.svg"
                        alt="Google"
                        className="img-fluid"
                      />
                    </div>
                    <div className="clients-logo">
                      <img
                        src="assets/images/clients/samsung.svg"
                        alt="Samsung"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators">
                <li
                  data-target="#landingClientCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#landingClientCarousel" data-slide-to={1} />
                <li data-target="#landingClientCarousel" data-slide-to={2} />
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <img
              src={incub1}
              alt="special offers"
              className="img-fluid"
              width="492px"
            />
          </div>
          <div className="col-md-6">
            <h2 className="section-title">Our Specializations</h2>
            <p className="mb-5">
              We specialize in three essential services – planning, launching, and
              managing – to guide your entrepreneurial journey from inception to
              success. In the planning phase, our experienced consultants work
              closely with you to develop robust business plans, conducting market
              research and financial modeling to ensure a solid foundation for
              your venture. As you embark on launching your business, we provide
              comprehensive support, offering insights into optimal locations,
              marketing strategies, and funding opportunities. Once your business
              is off the ground, our management services come into play, ensuring
              seamless operations, strategic growth planning, and ongoing support.
            </p>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="media landing-feature">
                  <span className="landing-feature-icon" />
                  <div className="media-body">
                    <h5>Planning</h5>
                    <p>
                      All the basics for businesses that are just getting started.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="media landing-feature">
                  <span className="landing-feature-icon" />
                  <div className="media-body">
                    <h5>Launching</h5>
                    <p>
                      All the basics for businesses that are just getting started.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="media landing-feature">
                  <span className="landing-feature-icon" />
                  <div className="media-body">
                    <h5>Management</h5>
                    <p>
                      All the basics for businesses that are just getting started.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 mb-5">
      <div className="container">
        <h2>Our Services</h2>
        <p className="text-muted mb-5">
          Thank you for your very professional and prompt response. I wished I had
          found you before{" "}
        </p>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card pricing-card border-warning">
              <div className="card-body">
                <h3 className="mb-1">Planning</h3>
                <p className="mb-4">
                Our planning services craft tailored business roadmaps through market research and financial modeling, guiding startups and pivoting businesses for sustainable growth.                </p>
                <Link to="/Planningservices" className="btn btn-outline-warning btn-rounded">
                  Know more
                </Link>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card pricing-card border-primary active">
              <div className="card-body">
                <h3>Managing</h3>
                <p className="mb-4">
                Our launching services propel your business forward, offering expert guidance on locations, marketing, and funding.                 </p>
                <Link to="/ManagingServices" className="btn btn-primary btn-rounded">
                  Know more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card pricing-card border-success">
              <div className="card-body">
                <h3>Launching</h3>
                <p className="mb-4">
                Our managing services drive ongoing success for your business. From seamless operations to strategic growth planning                </p>
                <Link to="/LaunchingServices" className="btn btn-outline-success btn-rounded">
                  Know more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='d-flex justify-content-center'>
              
                    <div className="card roadmap-card">
                        <h1>Start and grow your business</h1>
                        <hr />
                        <h5 className='mt-4 mb-4'>Want to be an entrepreneur? Learn how to get started on your business in few steps</h5>
                        <Link to='/Roadmap' class="btn btn-danger w-25">Start a business</Link>
                    </div>
                
            </section>
    <section className="py-5 mb-5">
      <div className="container">
        <h2>Satisfied Users</h2>
        <p className="text-muted mb-5">
          Thank you for your very professional and prompt response. I wished I had
          found you before{" "}
        </p>
        <div className="row">
          <div className="col-md-4 foi-review mb-5 mb-md-0">
            <div className="foi-rating">
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
            </div>
            <h5 className="foi-review-heading">Great support available</h5>
            <p className="foi-review-content">
              Thank you for your very professional and prompt response. I wished I
              had found you before I spent money on a competitors theme.
            </p>
            <div className="media foi-review-user">
              <img
                src={avatar11}
                alt="user"
                className="avatar"
              />
              <div className="media-body">
                <h6 className="mb-0">Amarachi Nkechi</h6>
                <p>UX Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 foi-review mb-5 mb-md-0">
            <div className="foi-rating">
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
            </div>
            <h5 className="foi-review-heading">Great support available</h5>
            <p className="foi-review-content">
              Thank you for your very professional and prompt response. I wished I
              had found you before I spent money on a competitors theme.
            </p>
            <div className="media foi-review-user">
              <img
                src={avatar12}
                alt="user"
                className="avatar"
              />
              <div className="media-body">
                <h6 className="mb-0">Margje Jutten</h6>
                <p>Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 foi-review mb-5 mb-md-0">
            <div className="foi-rating">
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
              <span className="fas fa-star checked" />
            </div>
            <h5 className="foi-review-heading">Great support available</h5>
            <p className="foi-review-content">
              Thank you for your very professional and prompt response. I wished I
              had found you before I spent money on a competitors theme.
            </p>
            <div className="media foi-review-user">
              <img
                src={avatar13}
                alt="user"
                className="avatar"
              />
              <div className="media-body">
                <h6 className="mb-0">Monica Böttger</h6>
                <p>UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 mb-5">
      <div className="container">
        <h2>FAQ</h2>
        <p className="section-subtitle">Frequently Asked Questions</p>
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-3 landing-faq-card">
              <div className="card-header bg-white" id="faqOneTitle">
                <a
                  href="#faqOneCollapse"
                  className="d-flex align-items-center"
                  data-toggle="collapse"
                >
                  <h6 className="mb-0">What is Business Incubator?</h6>{" "}
                  <i className="far fa-plus-square ml-auto" />
                </a>
              </div>
              <div
                id="faqOneCollapse"
                className="collapse"
                aria-labelledby="faqOneTitle"
              >
                <div className="card-body">
                  <p className="mb-0 text-gray">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mb-3 landing-faq-card">
              <div className="card-header bg-white" id="faqTwoTitle">
                <a
                  href="#faqTwoCollapse"
                  className="d-flex align-items-center"
                  data-toggle="collapse"
                >
                  <h6 className="mb-0">Why should I use choose Business Incubator?</h6>{" "}
                  <i className="far fa-plus-square ml-auto" />
                </a>
              </div>
              <div
                id="faqTwoCollapse"
                className="collapse"
                aria-labelledby="faqTwoTitle"
              >
                <div className="card-body">
                  <p className="mb-0 text-gray">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mb-3 landing-faq-card">
              <div className="card-header bg-white" id="faqThreeTitle">
                <a
                  href="#faqThreeCollapse"
                  className="d-flex align-items-center"
                  data-toggle="collapse"
                >
                  <h6 className="mb-0">How do I come up with a business idea?</h6>{" "}
                  <i className="far fa-plus-square ml-auto" />
                </a>
              </div>
              <div
                id="faqThreeCollapse"
                className="collapse"
                aria-labelledby="faqThreeTitle"
              >
                <div className="card-body">
                  <p className="mb-0 text-gray">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-3 landing-faq-card">
              <div className="card-header bg-white" id="faqFourTitle">
                <a
                  href="#faqFourCollapse"
                  className="d-flex align-items-center"
                  data-toggle="collapse"
                >
                  <h6 className="mb-0">Do I need a business plan?</h6>{" "}
                  <i className="far fa-plus-square ml-auto" />
                </a>
              </div>
              <div
                id="faqFourCollapse"
                className="collapse"
                aria-labelledby="faqFourTitle"
              >
                <div className="card-body">
                  <p className="mb-0 text-gray">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mb-3 landing-faq-card">
              <div className="card-header bg-white" id="faqFiveTitle">
                <a
                  href="#faqFiveCollapse"
                  className="d-flex align-items-center"
                  data-toggle="collapse"
                >
                  <h6 className="mb-0">How do I register my business?</h6>{" "}
                  <i className="far fa-plus-square ml-auto" />
                </a>
              </div>
              <div
                id="faqFiveCollapse"
                className="collapse"
                aria-labelledby="faqFiveTitle"
              >
                <div className="card-body">
                  <p className="mb-0 text-gray">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mb-3 landing-faq-card">
              <div className="card-header bg-white" id="faqSixTitle">
                <a
                  href="#faqSixCollapse"
                  className="d-flex align-items-center"
                  data-toggle="collapse"
                >
                  <h6 className="mb-0">How do I manage finances and accounting?</h6>{" "}
                  <i className="far fa-plus-square ml-auto" />
                </a>
              </div>
              <div
                id="faqSixCollapse"
                className="collapse"
                aria-labelledby="faqSixTitle"
              >
                <div className="card-body">
                  <p className="mb-0 text-gray">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

export default Home