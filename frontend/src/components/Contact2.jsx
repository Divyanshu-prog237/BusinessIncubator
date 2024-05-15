import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
//Footer
import facebook from '../assets/images/facebook (6).png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter (3).png'
import youtube from '../assets/images/youtube.png'
import Logo1 from '../assets/logo.png'
import ios from '../assets/images/ios.svg'
//Footer END

const ContactSchema = Yup.object().shape({
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required("Required"),
})

const Contact2 = () => {

    const navigate = useNavigate();

    const contactForm = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            phone_number: '',
            message: ''
        },
        onSubmit: async (values, action) => {
            console.log(values);

            const res = await fetch('http://localhost:3000/contacts/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status);
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully',
                    text: 'We will contact you soon'
                })
                navigate('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Message Failed',
                    text: 'Oops! Something went wrong'

                })
            }
        },
        validationSchema: ContactSchema,
    });

    return (
     
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
        <div className="container mt-5">
            <div className="card-shadow">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center p-5">
                        <h1 className=' position-absolute display-5 text-danger' style={{ fontFamily: "fantasy", marginTop:"-70px" }}>Query ? Connect with us</h1>
                        <form onSubmit={contactForm.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 c-margin">
                                    <input type="text" className="form-control inp-clr" placeholder="First name"
                                        id="fname"
                                        onChange={contactForm.handleChange}
                                        value={contactForm.values.fname} />
                                </div>
                                <div className="col-md-6 c-margin">
                                    <input type="text" className="form-control inp-clr" placeholder="Last name"
                                        id="lname"
                                        onChange={contactForm.handleChange}
                                        value={contactForm.values.lname} />
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <input type="email" className="form-control mt-4 inp-clr" placeholder="Email"
                                            id="email"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.email} />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="number" className="form-control mt-4 inp-clr" placeholder="Phone Number"
                                            id="phone_number"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.phone_number} />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea type="text" className="form-control mt-4 inp-clr" placeholder="Enquiry message..."
                                            id="message"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.message} />
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <button type="submit" className="btn btn-danger mt-4">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img className='c-img' src="https://cdn.dribbble.com/users/180062/screenshots/6784972/dribbble.gif" />
                    </div>
                </div>
            </div>
        </div>
        {/* <footer className="foi-footer text-white">
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
              <img src={Logo1} 
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
    </footer> */}
        </div>
    )
}

export default Contact2