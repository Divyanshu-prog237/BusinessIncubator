import React from 'react'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
//Footer
import facebook from '../assets/images/facebook (6).png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter (3).png'
import youtube from '../assets/images/youtube.png'

import ios from '../assets/images/ios.svg'
//Footer END


const SignupSchema = Yup.object().shape({
  fname: Yup.string()
  .min(2, 'Too Short!')
  .max(10, 'Too Long!')
  .required('Required'),
lname: Yup.string()
  .min(2, 'Too Short!')
  .max(10, 'Too Long!')
  .required('Required'),

email: Yup.string().email('Invalid email').required('Required'),
password: Yup
  .string()
  .required('Please Enter your password')
  .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  )
})

const Signup = () => {

    const navigate = useNavigate();

    const SignupForm = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            createdAt: new Date()
        },
        onSubmit: async (values, action) => {

            console.log(values);

            const res = await fetch('http://localhost:3000/users1/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            console.log(res.status)
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Success',
                    text: 'You have been successfully signed up!',
                })
                navigate('/login');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })

            }
        },
        validationSchema: SignupSchema,
    });
    

    return (
        <><nav className="navbar navbar-expand-lg navbar-light foi-navbar">
        <Link className="navbar-brand" to="/Admin/base">
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
                <Link className="dropdown-item" to="/Login">
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
              <Link className="btn btn-secondary" to="/Register">
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
            {/* Section: Design Block */}
            <section className="text-center text-lg-start bg-tertiary">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
                    }}
                />
                {/* Jumbotron */}
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div
                                className="card cascading-right"
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                                    // backdropFilter: "blur(80px)"
                                }}
                            >
                                <div className="card-body p-5 shadow-5 text-center">
                                <h1 className=' display-5 text-danger'  style={{ fontFamily: "fantasy", marginLeft: "20px", marginBottom: "30px"}}>SignUp Now</h1>

                                    <form onSubmit={SignupForm.handleSubmit}>
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label fw-bold" htmlFor="form3Example1">
                                                        First name
                                                    </label>
                                                    <span style={{color: 'red', fontSize:'10'}}>{SignupForm.touched.fname && SignupForm.errors.fname}</span>
                                                    <input
                                                        type="text"
                                                        id="fname"
                                                        onChange={SignupForm.handleChange}
                                                        value={SignupForm.values.fname}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label fw-bold" htmlFor="form3Example2">
                                                        Last name
                                                    </label>
                                                    <span style={{color: 'red', fontSize:'10'}}>{SignupForm.touched.lname && SignupForm.errors.lname}</span>
                                                    <input
                                                        type="text"
                                                        id="lname"
                                                        onChange={SignupForm.handleChange}
                                                        value={SignupForm.values.lname}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label fw-bold" htmlFor="form3Example3">
                                                Email address
                                            </label>
                                            <span style={{color: 'red', fontSize:'10'}}>{SignupForm.touched.email && SignupForm.errors.email}</span>
                                            <input
                                                type="email"
                                                id="email"
                                                onChange={SignupForm.handleChange}
                                                value={SignupForm.values.email}
                                                className="form-control"
                                            />
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4 fw-bold">
                                            <label className="form-label" htmlFor="form3Example4">
                                                Password
                                            </label>
                                            
                                            <input
                                                type="password"
                                                id="password"
                                                onChange={SignupForm.handleChange}
                                                value={SignupForm.values.password}
                                                className="form-control"
                                            />
                                            <span style={{color: 'red', fontSize:'8'}}>{SignupForm.touched.password && SignupForm.errors.password}</span>
                                        </div>
                                        {/* Checkbox */}
                                        
                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block mb-4"
                                        >
                                            Sign up
                                        </button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/002/779/363/large_2x/sign-up-concept-young-man-signing-up-or-login-to-online-account-on-smartphone-app-secure-login-and-password-illustration-flat-vector.jpg"
                                className="w-100 rounded-4 shadow-4"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* Jumbotron */}
            </section>
            {/* Section: Design Block */}
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

    )
}

export default Signup